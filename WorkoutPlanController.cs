using Prospect.Models.Domain.Workouts;
using Prospect.Models.Requests.Workouts;
using Prospect.Models.Responses;
using Prospect.Services.Interfaces.Logs;
using Prospect.Services;
using Prospect.Services.Interfaces.Workouts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace Prospect.Web.Controllers.Api.Workouts
{
    [RoutePrefix("api/workoutplans")]
    public class WorkoutPlanController : ApiController
    {
        IUserService _userService;
        IAuthenticationService _authService;
        IWorkoutPlanService _workoutPlanServices;
        IErrorLogService _errorLogService;
        public WorkoutPlanController(IWorkoutPlanService workoutPlanService, IUserService userService, IErrorLogService errorLogService, IAuthenticationService authService)
        {
            _userService = userService;
            _workoutPlanServices = workoutPlanService;
            _authService = authService;
            _errorLogService = errorLogService;
        }

        //**************************************** GET ALL ************************************
        [Route(), HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                // Create Item List
                ItemsResponse<Models.Domain.Workouts.WorkoutPlanResponse> response = new ItemsResponse<Models.Domain.Workouts.WorkoutPlanResponse>
                {
                    Items = _workoutPlanServices.GetAll()
                };
                //return successful response
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
                //return bad request if API endpoint is not reached
                return BadRequest(ex.Message);
            }
        }

        //***************************************** POST *****************************************
        [Route(), HttpPost]
        public IHttpActionResult Post(WorkoutPlanAddRequest model)
        {
            try
            {
                model.CreatedById = _userService.GetCurrentUser();
                model.ModifiedById = _userService.GetCurrentUser();
                //Check if state is valid, will return BadRequest if incorrect.
                if (!ModelState.IsValid) { return BadRequest(ModelState); }

                //Create Item List
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _workoutPlanServices.Post(model)
                };
                //return successful response
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
                //return bad request if API endpoint is not reached
                return BadRequest(ex.Message);
            }
        }

        //******************************************** PUT ****************************************

        [Route("{id:int}"), HttpPut]
        public IHttpActionResult Put(WorkoutPlanUpdateRequest model)
        {
            try
            {
                model.ModifiedById = _userService.GetCurrentUser();
                //Check if state is valid, will return BadRequest if incorrect.
                if (!ModelState.IsValid) { return BadRequest(ModelState); }

                //Execute PUT CALL
                _workoutPlanServices.Put(model);
                //return successful response
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
                //return bad request if API endpoint is not reached
                return BadRequest(ex.Message);
            }
        }

        ////******************************************** GET BY ID ****************************************

        [Route("currentAthleteWorkoutPlans"), HttpGet]
        public IHttpActionResult GetAllById()
        {
            try
            {
                int id = _userService.GetCurrentUser();
                ItemsResponse<Models.Domain.Workouts.WorkoutPlanResponse> response = new ItemsResponse<Models.Domain.Workouts.WorkoutPlanResponse>
                {
                    Items = _workoutPlanServices.GetAllById(id)
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
        //-----------------Get by Workout Id---------------------------------

        [Route("{id:int}"), HttpGet]
        public IHttpActionResult GetById(int id)
        {
            try
            {

                ItemsResponse<Models.Domain.Workouts.WorkoutPlanResponse> response = new ItemsResponse<Models.Domain.Workouts.WorkoutPlanResponse>
                {
                    Items = _workoutPlanServices.GetAllById(id)
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

        //******************************************** DELETE ****************************************
        [Route("{id:int}"), HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _workoutPlanServices.Delete(id)
                };
                //
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
    }
}
