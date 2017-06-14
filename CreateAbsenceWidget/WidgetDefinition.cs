using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WidgetDashboard.DomainModel.Models;

namespace CreateAbsenceWidget
{
    public class WidgetDefinition : IWidget
    {
        public string Name
        {
            get
            {
                return "Create Absence";
            }
        }

        public string GetHtml()
        {
            return CreateAbsenceWidget.Properties.Resources.index;
        }

        public WidgetLayout Getlayout()
        {
            return new WidgetLayout()
            {
                Widh = 4,
                Height = 3
            };
        }

        public string GetScript()
        {
            return CreateAbsenceWidget.Properties.Resources.script;
        }

        public List<string> GetScriptReferences()
        {
            var refs = new List<string>();
            refs.Add("<script type=\"text/javascript\" src=\"//cdn.jsdelivr.net/momentjs/latest/moment.min.js\"></script>");
            refs.Add("<script type=\"text/javascript\" src=\"//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js\"></script>");
            return refs;
        }

        public string GetStyle()
        {
            return CreateAbsenceWidget.Properties.Resources.style;
        }

        public List<string> GetStyleReferences()
        {
            var styles = new List<string>();
            styles.Add("<link href=\"//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css\" rel=\"stylesheet\" />");
            return styles;
        }

        public bool HasAuthority()
        {
            return true;
        }
    }
}
