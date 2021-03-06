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
    root.KodingApi.JGroupCustomize = factory(root.KodingApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JGroupCustomize model module.
   * @module koding-api/JGroupCustomize
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>JGroupCustomize</code>.
   * @alias module:koding-api/JGroupCustomize
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>JGroupCustomize</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/JGroupCustomize} obj Optional instance to populate.
   * @return {module:koding-api/JGroupCustomize} The populated <code>JGroupCustomize</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('coverPhoto')) {
        obj['coverPhoto'] = ApiClient.convertToType(data['coverPhoto'], 'String');
      }
      if (data.hasOwnProperty('logo')) {
        obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
      }
      if (data.hasOwnProperty('chatlioId')) {
        obj['chatlioId'] = ApiClient.convertToType(data['chatlioId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} coverPhoto
   */
  exports.prototype['coverPhoto'] = undefined;
  /**
   * @member {String} logo
   */
  exports.prototype['logo'] = undefined;
  /**
   * @member {String} chatlioId
   */
  exports.prototype['chatlioId'] = undefined;



  return exports;
}));


