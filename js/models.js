/**
 * Created by jahangir on 9/4/14.
 */

App.Client = DS.Model.extend({
    name: DS.attr("string"),
    idNumber: DS.attr("string")
});

App.Login = DS.Model.extend({
    name: DS.attr("string"),
    title: DS.attr("string")
});

App.Program = DS.Model.extend({
    name: DS.attr("string"),
    individuals: DS.hasMany("client", {async: true})
});

App.StaffTimeTrackerTemplate = DS.Model.extend({
    title: DS.attr("string"),
    timeFrom: DS.attr("number"),
    timeTo: DS.attr("number"),
    program: DS.belongsTo("program"),
    individuals: DS.hasMany("client", {async: true}),
    staffs: DS.hasMany("login", {async: true})
});

App.StaffTimeTrackerClientAttendance = DS.Model.extend({
    individual: DS.belongsTo("client"),
    staff: DS.belongsTo("login"),
    program: DS.belongsTo("program"),
    date: DS.attr("number"),
    timeFrom: DS.attr("number"),
    timeTo: DS.attr("number"),
    template: DS.belongsTo("staff-time-tracker-template")
});

App.StaffTimeTrackerStaffAttendance = DS.Model.extend({
    staff: DS.belongsTo("login"),
    program: DS.belongsTo("program"),
    date: DS.attr("number"),
    timeFrom: DS.attr("number"),
    timeTo: DS.attr("number"),
    template: DS.belongsTo("staff-time-tracker-template")
});
