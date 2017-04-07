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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KodingApi) {
      root.KodingApi = {};
    }
    root.KodingApi.JSessionForeignAuth = factory(root.KodingApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JSessionForeignAuth model module.
   * @module koding-api/JSessionForeignAuth
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>JSessionForeignAuth</code>.
   * @alias module:koding-api/JSessionForeignAuth
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>JSessionForeignAuth</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/JSessionForeignAuth} obj Optional instance to populate.
   * @return {module:koding-api/JSessionForeignAuth} The populated <code>JSessionForeignAuth</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('gitlab')) {
        obj['gitlab'] = ApiClient.convertToType(data['gitlab'], Object);
      }
      if (data.hasOwnProperty('github')) {
        obj['github'] = ApiClient.convertToType(data['github'], Object);
      }
      if (data.hasOwnProperty('facebook')) {
        obj['facebook'] = ApiClient.convertToType(data['facebook'], Object);
      }
      if (data.hasOwnProperty('linkedin')) {
        obj['linkedin'] = ApiClient.convertToType(data['linkedin'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Object} gitlab
   */
  exports.prototype['gitlab'] = undefined;
  /**
   * @member {Object} github
   */
  exports.prototype['github'] = undefined;
  /**
   * @member {Object} facebook
   */
  exports.prototype['facebook'] = undefined;
  /**
   * @member {Object} linkedin
   */
  exports.prototype['linkedin'] = undefined;



  return exports;
}));

