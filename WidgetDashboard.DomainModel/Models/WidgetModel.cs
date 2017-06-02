using System;
using System.Collections.Generic;
using System.Text;

namespace WidgetDashboard.DomainModel.Models
{
    public class WidgetModel
    {
        public List<WidgetItem> Widgets { get; private set; }

        public WidgetModel()
        {
            Widgets = new List<WidgetItem>();
        }

    }
}
