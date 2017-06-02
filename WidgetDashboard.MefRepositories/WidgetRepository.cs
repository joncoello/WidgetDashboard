using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using WidgetDashboard.DomainModel.Models;
using System.Runtime.Loader;
using System.Composition.Hosting;

namespace WidgetDashboard.MefRepositories
{
    public class WidgetRepository
    {

        private const string WIDGET_FILE_PATTERN = "*Widget*.dll";

        public List<WidgetModel> GetWidgets()
        {

            var assemblies = FetchAssemblies();

            return null;

        }

        private IEnumerable<Assembly> FetchAssemblies()
        {
            var path = Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "bin");
            var assemblies = Directory
            .GetFiles(path, WIDGET_FILE_PATTERN, SearchOption.TopDirectoryOnly)
            .Select(AssemblyLoadContext.GetAssemblyName)
            .Select(AssemblyLoadContext.Default.LoadFromAssemblyName)
            .ToList();
            return assemblies;
        }

        private CompositionHost GetContainer(IEnumerable<Assembly> assemblies)
        {
            var conventions = new ConventionBuilder();
            conventions.ForTypesDerivedFrom<MvcDashboard.Contracts.IWidget>().Export<MvcDashboard.Contracts.IWidget>();
            return new ContainerConfiguration().WithAssemblies(assemblies, conventions).CreateContainer();
        }

    }
}
