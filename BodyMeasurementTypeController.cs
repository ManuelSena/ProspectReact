using Prospect.Models.Domain.Workouts;
using Prospect.Models.Requests.Workouts;
using Prospect.Models.Responses;
using Prospect.Services.Interfaces.Logs;
using Prospect.Services.Interfaces.Workouts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Prospect.Web.Controllers.Workouts
{
    
    [RoutePrefix("api/BodyMeasurementType")]
    public class BodyMeasurementTypeController : ApiController
    {

        IBodyMeasurementTypeService _BodyMeasurementTypeService;
        IErrorLogService _errorLogService;


        public BodyMeasurementTypeController(IBodyMeasurementTypeService BodyMeasurementTypeService, IErrorLogService errorLogService)
        {
            _BodyMeasurementTypeService = BodyMeasurementTypeService;
            _errorLogService = errorLogService;
        }

        //GET GET GET GET GET GET GET GET GET 
        [Route(), HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                ItemsResponse<BodyMeasurementType> response = new ItemsResponse<BodyMeasurementType>
                {
                    Items = _BodyMeasurementTypeService.GetAll()
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
        
        //POST POST POST POST POST POST POST 
        [Route(), HttpPost]
        public IHttpActionResult Post(BodyMeasurementTypeAddRequest model)
        {
            try
            {
                if (!ModelState.IsValid) { return BadRequest(ModelState); }
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _BodyMeasurementTypeService.Post(model)
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

        //GET BY ID GET BY ID GET BY ID GET BY ID
        [Route("{id:int}"), HttpGet]
        public IHttpActionResult GetById(int id)
        {
            try
            {
                ItemResponse<BodyMeasurementType> response = new ItemResponse<BodyMeasurementType>
                {
                    Item = _BodyMeasurementTypeService.GetById(id)
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


        //PUT
        [Route(), HttpPut]
        public IHttpActionResult Put(BodyMeasurementTypeUpdateRequest model)
        {
            try
            {
                if (!ModelState.IsValid) { return BadRequest(ModelState); }

                _BodyMeasurementTypeService.Put(model);

                return Ok(new SuccessResponse());
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
