using Prospect.Models.Domain.Workouts;
using Prospect.Models.Requests.Workouts;
using Prospect.Models.Responses;
using Prospect.Services.Interfaces.Logs;
using Prospect.Services.Interfaces.Workouts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Prospect.Web.Controllers.Api.Workouts
{
    
    [RoutePrefix("api/plandirections")]
    public class PlanDirectionController : ApiController
    {
        IPlanDirectionService _planDirection;
        IErrorLogService _errorLogService;

        public PlanDirectionController(IPlanDirectionService planDirection, IErrorLogService errorLogService)
        {
            _planDirection = planDirection;
            _errorLogService = errorLogService;
        }
        [Route(), HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                ItemsResponse<PlanDirection> response = new ItemsResponse<PlanDirection>
                {
                    Items = _planDirection.GetAll()
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                _errorLogService.Post(new Models.Requests.Logs.ErrorLogAddRequest
                {
                    ErrorSourceTypeId = 1,
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    Title = "Error in " + GetType().Name + " " + System.Reflection.MethodBase.GetCurrentMethod().Name
                });
                return (BadRequest(ex.Message));
            }
        }
        [Route("{id:int}"), HttpGet]
        public IHttpActionResult GetById (int id)
        {
            try
            {
                ItemResponse<PlanDirection> response = new ItemResponse<PlanDirection>
                {
                    Item = _planDirection.GetById(id)
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                _errorLogService.Post(new Models.Requests.Logs.ErrorLogAddRequest
                {
                    ErrorSourceTypeId = 1,
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    Title = "Error in " + GetType().Name + " " + System.Reflection.MethodBase.GetCurrentMethod().Name
                });
                return BadRequest(ex.Message);
            }
        }
        [Route(), HttpPost]
        public IHttpActionResult Post(PlanDirectionAddRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _planDirection.Post(model)
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                _errorLogService.Post(new Models.Requests.Logs.ErrorLogAddRequest
                {
                    ErrorSourceTypeId = 1,
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    Title = "Error in " + GetType().Name + " " + System.Reflection.MethodBase.GetCurrentMethod().Name
                });
                return BadRequest(ex.Message);
            }
        }
        [Route("{id:int}"), HttpPut]
        public IHttpActionResult Put(PlanDirectionUpdateRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _planDirection.Put(model)
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                _errorLogService.Post(new Models.Requests.Logs.ErrorLogAddRequest
                {
                    ErrorSourceTypeId = 1,
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    Title = "Error in " + GetType().Name + " " + System.Reflection.MethodBase.GetCurrentMethod().Name
                });
                return BadRequest(ex.Message);
            }
        }
        [Route("{id:int}"), HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _planDirection.Delete(id)
                };
                return Ok();
            }
            catch (Exception ex)
            {
                _errorLogService.Post(new Models.Requests.Logs.ErrorLogAddRequest
                {
                    ErrorSourceTypeId = 1,
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    Title = "Error in " + GetType().Name + " " + System.Reflection.MethodBase.GetCurrentMethod().Name
                });
                return BadRequest(ex.Message);
            };
        }
    }
}