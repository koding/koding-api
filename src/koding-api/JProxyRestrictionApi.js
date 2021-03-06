/**
 * Koding API
 * Koding API for integrating your application with Koding services
 *
 * OpenAPI spec version: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'koding-api/DefaultResponse', 'koding-api/DefaultSelector', 'koding-api/UnauthorizedRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../koding-api/DefaultResponse'), require('../koding-api/DefaultSelector'), require('../koding-api/UnauthorizedRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KodingApi) {
      root.KodingApi = {};
    }
    root.KodingApi.JProxyRestrictionApi = factory(root.KodingApi.ApiClient, root.KodingApi.DefaultResponse, root.KodingApi.DefaultSelector, root.KodingApi.UnauthorizedRequest);
  }
}(this, function(ApiClient, DefaultResponse, DefaultSelector, UnauthorizedRequest) {
  'use strict';

  /**
   * JProxyRestriction service.
   * @module koding-api/JProxyRestrictionApi
   * @version 0.0.3
   */

  /**
   * Constructs a new JProxyRestrictionApi. 
   * @alias module:koding-api/JProxyRestrictionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    
    if (typeof apiClient == 'string') {
      this.apiClient = ApiClient.instance;
      this.apiClient.authentications.Bearer.apiKey = apiClient;
    } else {
      this.apiClient = apiClient || ApiClient.instance;
    }
    



    /**
     * 
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.clear = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling clear");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = DefaultResponse;

      return this.apiClient.callApi(
        '/JProxyRestriction.clear', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * 
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.create = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = DefaultResponse;

      return this.apiClient.callApi(
        '/JProxyRestriction.create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * 
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.remove = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling remove");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = DefaultResponse;

      return this.apiClient.callApi(
        '/JProxyRestriction.remove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * 
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.some = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling some");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = DefaultResponse;

      return this.apiClient.callApi(
        '/JProxyRestriction.some', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
