using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Absence.API.Repositories
{
    public class AbsenceRepository
    {

        private string connectionString = @"server = ACCESS-1303SF2\SQL2014 ; database = Absence ; user id = sa ; pwd = Patrick@1";

        public async Task Create(Models.Absence absence)
        {
            
            using (var conn = new SqlConnection(connectionString))
            {
                await conn.OpenAsync();

                using (var cmd = new SqlCommand("Absence.AbsenceRequest_Create", conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@StartDate", absence.StartDate));
                    cmd.Parameters.Add(new SqlParameter("@EndDate", absence.EndDate));

                    await cmd.ExecuteNonQueryAsync();

                }

            }

        }

        public async Task<List<Absence.API.Models.Absence>> List()
        {

            using (var conn = new SqlConnection(connectionString))
            {
                await conn.OpenAsync();

                using (var cmd = new SqlCommand("Absence.AbsenceRequest_List", conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    
                    using (var reader = cmd.ExecuteReader())
                    {

                        var list = new List<Absence.API.Models.Absence>();

                        while (reader.Read())
                        {
                            list.Add(new Models.Absence()
                            {
                                StartDate = Convert.ToDateTime(reader["StartDate"]),
                                EndDate = Convert.ToDateTime(reader["EndDate"])
                            });
                        }

                        return list;

                    }

                }

            }

        }

    }
}
