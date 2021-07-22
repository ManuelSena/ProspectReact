using Prospect.Models.Domain;
using Prospect.Models.Domain.Workouts;
using Prospect.Models.Requests.Workouts;
using Prospect.Models.Responses;
using Prospect.Services;
using Prospect.Services.Interfaces.Logs;
using Prospect.Services.Interfaces.Workouts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Prospect.Web.Controllers.Api.Workouts
{
    [RoutePrefix("api/resultlogs")]
    public class PlanResultLogController : ApiController
    {
        IPlanResultLogService _planResultLogService;
        IErrorLogService _errorLogService;
        IUserService _userService;
        IAuthenticationService _authenticationService;

        public PlanResultLogController(IPlanResultLogService planResultLogService, IErrorLogService errorLogService, IUserService userService, IAuthenticationService authenticationService)
        {
            _planResultLogService = planResultLogService;
            _errorLogService = errorLogService;
            _userService = userService;
            _authenticationService = authenticationService;
        }

        [Route(), HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                ItemsResponse<PlanResultLog> response = new ItemsResponse<PlanResultLog>
                {
                    Items = _planResultLogService.GetAll()
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

        [Route("{id:int}"), HttpGet]
        public IHttpActionResult GetById(int id)
        {
            try
            {
                ItemsResponse<PlanResultLog> response = new ItemsResponse<PlanResultLog>
                {
                    Items = _planResultLogService.GetById(id)
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
        public IHttpActionResult Post(PlanResultLogAddRequest model)
        {
            try
            {
              
                if (!ModelState.IsValid) { return BadRequest(ModelState); }
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _planResultLogService.Post(model)
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
        public IHttpActionResult Put(PlanResultLogUpdateRequest model)
        {
            try
            {
                if (!ModelState.IsValid) { return BadRequest(ModelState); }
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _planResultLogService.Put(model)
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
            }
        }

    }
}
    


