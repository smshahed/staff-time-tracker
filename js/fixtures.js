/**
 * Created by jahangir on 9/4/14.
 */

App.Client.FIXTURES = [
    {id: 1, name: 'Peter Walter', idNumber: "12340"},
    {id: 2, name: 'Jürgen Schwartz', idNumber: "620229"},
    {id: 3, name: 'Sara Hertzog', idNumber: "9873"},
    {id: 4, name: 'Maximilian Kirsch', idNumber: "217653"},
    {id: 5, name: 'Birgit Nussbaum', idNumber: "09834"},
    {id: 6, name: 'Maximilian Wurfel', idNumber: "341265"},
    {id: 7, name: 'Ralph Abt', idNumber: "983247"},
    {id: 8, name: 'Nicole Beyer', idNumber: "73244"},
    {id: 9, name: 'Bandar Malouf', idNumber: "89341"}
];

App.Login.FIXTURES = [
    {id: 10, name: 'June Goforth', tilte: 'DSP'},
    {id: 20, name: 'Rachael Matthews', title: 'DSP'}
];

App.Program.FIXTURES = [
    {id: 100, name: 'Folsom Home', clients: [1, 2, 3, 4]},
    {id: 200, name: 'Emerald Lake Hills Home', clients: [5, 6, 7, 8, 9]}
];

App.StaffTimeTrackerTemplate.FIXTURES = [
    {id:1000, title: "Morning Walk", timeFrom: 700, timeTo: 800, program: 100, individuals: [1, 2, 3, 4], staffs: [10, 20]},
    {id:1000, title: "Visit Zoo", timeFrom: 1600, timeTo: 1730, program: 200, individuals: [5, 6, 7, 8], staffs: [10, 20]}
];
