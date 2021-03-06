﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WidgetDashboard.DomainModel.Models;

namespace ViewAbsenceWidget
{
    public class WidgetDefinition : IWidget
    {

        public string Name
        {
            get
            {
                return "View Absence";
            }
        }

        public string GetHtml()
        {
            return ViewAbsenceWidget.Properties.Resources.index;
        }

        public WidgetLayout Getlayout()
        {
            return new WidgetLayout()
            {
                Widh = 8,
                Height = 9
            };
        }

        public string GetScript()
        {
            return ViewAbsenceWidget.Properties.Resources.main;
        }

        public List<string> GetScriptReferences()
        {
            var refs = new List<string>();
            return refs;
        }

        public string GetStyle()
        {
            return ViewAbsenceWidget.Properties.Resources.style;
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
