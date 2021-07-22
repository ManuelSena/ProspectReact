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
    
    [RoutePrefix("api/durationtypes")]
    public class DurationTypeController : ApiController
    {
        IDurationTypeService _durationTypeService;
        IErrorLogService _errorLogService;

        public DurationTypeController(IDurationTypeService durationTypeService, IErrorLogService errorLogService)//new
        {
            _durationTypeService = durationTypeService;//new
            _errorLogService = errorLogService;
        }

        [Route(), HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                ItemsResponse<DurationType> response = new ItemsResponse<DurationType>
                {
                    Items = _durationTypeService.GetAll()
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

        [Route("getpage/{PageNumber:int}"), HttpGet]
        public IHttpActionResult GetAllPerPage(int PageNumber)
        {
            try
            {
                ItemsResponse<DurationType> response = new ItemsResponse<DurationType>
                {
                    Items = _durationTypeService.GetAllPerPage(PageNumber)
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("{id:int}"), HttpGet]
        public IHttpActionResult GetById(int id)
        {
            try
            {
                ItemsResponse<DurationType> response = new ItemsResponse<DurationType>
                {
                    Items = _durationTypeService.GetById(id)
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
        public IHttpActionResult Post(DurationTypeAddRequest model)
        {
            try
            {
                if (!ModelState.IsValid) { return BadRequest(ModelState); }
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _durationTypeService.Post(model)
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
        public IHttpActionResult Put(DurationTypeUpdateRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _durationTypeService.Put(model)
                };
                //do something here.
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

        [Route("{id:int}"), HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _durationTypeService.Delete(id)
                };
                //do something here.
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