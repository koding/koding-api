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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KodingApi);
  }
}(this, function(expect, KodingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KodingApi.JGroupLimit();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('JGroupLimit', function() {
    it('should create an instance of JGroupLimit', function() {
      // uncomment below and update the code to test JGroupLimit
      //var instane = new KodingApi.JGroupLimit();
      //expect(instance).to.be.a(KodingApi.JGroupLimit);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KodingApi.JGroupLimit();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KodingApi.JGroupLimit();
      //expect(instance).to.be();
    });

    it('should have the property member (base name: "member")', function() {
      // uncomment below and update the code to test the property member
      //var instane = new KodingApi.JGroupLimit();
      //expect(instance).to.be();
    });

    it('should have the property validFor (base name: "validFor")', function() {
      // uncomment below and update the code to test the property validFor
      //var instane = new KodingApi.JGroupLimit();
      //expect(instance).to.be();
    });

    it('should have the property instancePerMember (base name: "instancePerMember")', function() {
      // uncomment below and update the code to test the property instancePerMember
      //var instane = new KodingApi.JGroupLimit();
      //expect(instance).to.be();
    });

    it('should have the property allowedInstances (base name: "allowedInstances")', function() {
      // uncomment below and update the code to test the property allowedInstances
      //var instane = new KodingApi.JGroupLimit();
      //expect(instance).to.be();
    });

    it('should have the property maxInstance (base name: "maxInstance")', function() {
      // uncomment below and update the code to test the property maxInstance
      //var instane = new KodingApi.JGroupLimit();
      //expect(instance).to.be();
    });

    it('should have the property storagePerInstance (base name: "storagePerInstance")', function() {
      // uncomment below and update the code to test the property storagePerInstance
      //var instane = new KodingApi.JGroupLimit();
      //expect(instance).to.be();
    });

    it('should have the property restrictions (base name: "restrictions")', function() {
      // uncomment below and update the code to test the property restrictions
      //var instane = new KodingApi.JGroupLimit();
      //expect(instance).to.be();
    });

  });

}));
