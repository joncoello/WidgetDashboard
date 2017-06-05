using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WidgetDashboard.DomainModel.Models;

namespace ViewAbsenceWidget
{
    public class WidgetDefinition : IWidget
    {
        public string GetHtml()
        {
            return ViewAbsenceWidget.Properties.Resources.index;
        }

        public WidgetLayout Getlayout()
        {
            return new WidgetLayout()
            {
                X = 0,
                Y = 0,
                Widh = 7,
                Height = 3
            };
        }

        public string GetScript()
        {
            return "";
        }

        public List<string> GetScriptReferences()
        {
            var refs = new List<string>();
            return refs;
        }

        public string GetStyle()
        {
            return "";
        }

        public List<string> GetStyleReferences()
        {
            return new List<string>();
        }

        public bool HasAuthority()
        {
            return true;
        }
    }
}
