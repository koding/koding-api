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
    instance = new KodingApi.JGroupApi();
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

  describe('JGroupApi', function() {
    describe('addSubscription', function() {
      it('should call addSubscription successfully', function(done) {
        //uncomment below and update the code to test addSubscription
        //instance.addSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('byRelevance', function() {
      it('should call byRelevance successfully', function(done) {
        //uncomment below and update the code to test byRelevance
        //instance.byRelevance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('canEditGroup', function() {
      it('should call canEditGroup successfully', function(done) {
        //uncomment below and update the code to test canEditGroup
        //instance.canEditGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changeMemberRoles', function() {
      it('should call changeMemberRoles successfully', function(done) {
        //uncomment below and update the code to test changeMemberRoles
        //instance.changeMemberRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('count', function() {
      it('should call count successfully', function(done) {
        //uncomment below and update the code to test count
        //instance.count(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('create', function() {
      it('should call create successfully', function(done) {
        //uncomment below and update the code to test create
        //instance.create(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('destroy', function() {
      it('should call destroy successfully', function(done) {
        //uncomment below and update the code to test destroy
        //instance.destroy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('each', function() {
      it('should call each successfully', function(done) {
        //uncomment below and update the code to test each
        //instance.each(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchAdmins', function() {
      it('should call fetchAdmins successfully', function(done) {
        //uncomment below and update the code to test fetchAdmins
        //instance.fetchAdmins(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchAdminsWithEmail', function() {
      it('should call fetchAdminsWithEmail successfully', function(done) {
        //uncomment below and update the code to test fetchAdminsWithEmail
        //instance.fetchAdminsWithEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchApiTokens', function() {
      it('should call fetchApiTokens successfully', function(done) {
        //uncomment below and update the code to test fetchApiTokens
        //instance.fetchApiTokens(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchBlockedAccounts', function() {
      it('should call fetchBlockedAccounts successfully', function(done) {
        //uncomment below and update the code to test fetchBlockedAccounts
        //instance.fetchBlockedAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchBlockedAccountsWithEmail', function() {
      it('should call fetchBlockedAccountsWithEmail successfully', function(done) {
        //uncomment below and update the code to test fetchBlockedAccountsWithEmail
        //instance.fetchBlockedAccountsWithEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchDataAt', function() {
      it('should call fetchDataAt successfully', function(done) {
        //uncomment below and update the code to test fetchDataAt
        //instance.fetchDataAt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchMembers', function() {
      it('should call fetchMembers successfully', function(done) {
        //uncomment below and update the code to test fetchMembers
        //instance.fetchMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchMembersWithEmail', function() {
      it('should call fetchMembersWithEmail successfully', function(done) {
        //uncomment below and update the code to test fetchMembersWithEmail
        //instance.fetchMembersWithEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchModerators', function() {
      it('should call fetchModerators successfully', function(done) {
        //uncomment below and update the code to test fetchModerators
        //instance.fetchModerators(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchModeratorsWithEmail', function() {
      it('should call fetchModeratorsWithEmail successfully', function(done) {
        //uncomment below and update the code to test fetchModeratorsWithEmail
        //instance.fetchModeratorsWithEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchMyMemberships', function() {
      it('should call fetchMyMemberships successfully', function(done) {
        //uncomment below and update the code to test fetchMyMemberships
        //instance.fetchMyMemberships(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchMyRoles', function() {
      it('should call fetchMyRoles successfully', function(done) {
        //uncomment below and update the code to test fetchMyRoles
        //instance.fetchMyRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchPermissionSetOrDefault', function() {
      it('should call fetchPermissionSetOrDefault successfully', function(done) {
        //uncomment below and update the code to test fetchPermissionSetOrDefault
        //instance.fetchPermissionSetOrDefault(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchPermissions', function() {
      it('should call fetchPermissions successfully', function(done) {
        //uncomment below and update the code to test fetchPermissions
        //instance.fetchPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchResources', function() {
      it('should call fetchResources successfully', function(done) {
        //uncomment below and update the code to test fetchResources
        //instance.fetchResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchRoles', function() {
      it('should call fetchRoles successfully', function(done) {
        //uncomment below and update the code to test fetchRoles
        //instance.fetchRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchSubscription', function() {
      it('should call fetchSubscription successfully', function(done) {
        //uncomment below and update the code to test fetchSubscription
        //instance.fetchSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchUserRoles', function() {
      it('should call fetchUserRoles successfully', function(done) {
        //uncomment below and update the code to test fetchUserRoles
        //instance.fetchUserRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchUserStatus', function() {
      it('should call fetchUserStatus successfully', function(done) {
        //uncomment below and update the code to test fetchUserStatus
        //instance.fetchUserStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isMember', function() {
      it('should call isMember successfully', function(done) {
        //uncomment below and update the code to test isMember
        //instance.isMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('join', function() {
      it('should call join successfully', function(done) {
        //uncomment below and update the code to test join
        //instance.join(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('joinUser', function() {
      it('should call joinUser successfully', function(done) {
        //uncomment below and update the code to test joinUser
        //instance.joinUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('kickMember', function() {
      it('should call kickMember successfully', function(done) {
        //uncomment below and update the code to test kickMember
        //instance.kickMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('leave', function() {
      it('should call leave successfully', function(done) {
        //uncomment below and update the code to test leave
        //instance.leave(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modify', function() {
      it('should call modify successfully', function(done) {
        //uncomment below and update the code to test modify
        //instance.modify(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyData', function() {
      it('should call modifyData successfully', function(done) {
        //uncomment below and update the code to test modifyData
        //instance.modifyData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('one', function() {
      it('should call one successfully', function(done) {
        //uncomment below and update the code to test one
        //instance.one(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchMembers', function() {
      it('should call searchMembers successfully', function(done) {
        //uncomment below and update the code to test searchMembers
        //instance.searchMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendNotification', function() {
      it('should call sendNotification successfully', function(done) {
        //uncomment below and update the code to test sendNotification
        //instance.sendNotification(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setLimit', function() {
      it('should call setLimit successfully', function(done) {
        //uncomment below and update the code to test setLimit
        //instance.setLimit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setOAuth', function() {
      it('should call setOAuth successfully', function(done) {
        //uncomment below and update the code to test setOAuth
        //instance.setOAuth(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('someWithRelationship', function() {
      it('should call someWithRelationship successfully', function(done) {
        //uncomment below and update the code to test someWithRelationship
        //instance.someWithRelationship(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('suggestUniqueSlug', function() {
      it('should call suggestUniqueSlug successfully', function(done) {
        //uncomment below and update the code to test suggestUniqueSlug
        //instance.suggestUniqueSlug(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('toggleFeature', function() {
      it('should call toggleFeature successfully', function(done) {
        //uncomment below and update the code to test toggleFeature
        //instance.toggleFeature(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transferOwnership', function() {
      it('should call transferOwnership successfully', function(done) {
        //uncomment below and update the code to test transferOwnership
        //instance.transferOwnership(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unblockMember', function() {
      it('should call unblockMember successfully', function(done) {
        //uncomment below and update the code to test unblockMember
        //instance.unblockMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePermissions', function() {
      it('should call updatePermissions successfully', function(done) {
        //uncomment below and update the code to test updatePermissions
        //instance.updatePermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
