using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using WidgetDashboard.DomainModel.Models;
using System.Runtime.Loader;
using System.Composition.Hosting;
using System.Composition.Convention;
using System.Text.RegularExpressions;

namespace WidgetDashboard.MefRepositories
{
    public class WidgetRepository
    {

        private const string WIDGET_FILE_PATTERN = "*Widget.dll";

        public WidgetModel GetWidgets()
        {

            var model = new WidgetModel();

            var assemblies = FetchAssemblies();
            var container = GetContainer(assemblies);
            var widgets = container.GetExports<IWidget>();

            foreach (var widget in widgets)
            {
                model.Widgets.Add(CreateWidget(widget));
            }

            return model;

        }

        private IEnumerable<Assembly> FetchAssemblies()
        {
            var path = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location);
            var assemblies = Directory
            .GetFiles(path, WIDGET_FILE_PATTERN, SearchOption.TopDirectoryOnly)
            .Select(AssemblyLoadContext.Default.LoadFromAssemblyPath)
            .ToList();
            return assemblies;
        }

        private CompositionHost GetContainer(IEnumerable<Assembly> assemblies)
        {
            var conventions = new ConventionBuilder();
            conventions.ForTypesDerivedFrom<IWidget>().Export<IWidget>();
            return new ContainerConfiguration().WithAssemblies(assemblies, conventions).CreateContainer();
        }

        private WidgetItem CreateWidget(IWidget widget)
        {

            return new WidgetItem
            {
                Name = widget.Name,
                Template = GetBody(widget.GetHtml()),
                Script = widget.GetScript(),
                ScriptReferences = widget.GetScriptReferences(),
                Style = widget.GetStyle(),
                StyleReferences = widget.GetStyleReferences(),
                Layout = widget.Getlayout()
            };

        }

        private string GetBody(string html)
        {

            var pattern = "<!--bodystart-->(.*?)<!--bodyend-->";
            var regex = new Regex(pattern, RegexOptions.Singleline);
            var match = regex.Match(html);
            var value = match.Value;

            return value;
        }

    }
}
