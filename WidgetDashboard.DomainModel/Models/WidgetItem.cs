using System;
using System.Collections.Generic;

namespace WidgetDashboard.DomainModel.Models
{
    public class WidgetItem
    {
        public Guid ID { get; set; }
        public string Template { get; set; }
        public string Script { get; set; }
        public string Style { get; set; }
        public List<string> ScriptReferences { get; set; }
        public List<string> StyleReferences { get; set; }
        public WidgetLayout Layout { get; set; }
        public string Name { get; set; }

        public WidgetItem()
        {
            ID = Guid.NewGuid();
        }

    }
}