using System;

namespace WidgetDashboard.DomainModel.Models
{
    public class WidgetItem
    {
        public Guid ID { get; set; }
        public string Template { get; set; }
        public string Script { get; set; }
        public string Style { get; set; }

    }
}