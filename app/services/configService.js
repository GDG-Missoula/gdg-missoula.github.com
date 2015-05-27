angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG Missoula',
        'id'            : '111439872924209508980',
        'googleApi'     : 'AIzaSyAvtGTIX0uWwObbrvcWvm1tgr6Fl-f7WaM',
        'pwaId'         : '6153662499822550481', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://gdg-missoula.github.io',
        'twitter'       : '',
        'facebook'      : '',
        'meetup'        : 'Montana-Programmers',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title: 'Worldwide GDG Events',
            subtitle: 'Directory of developer events organized by tags and displayed on a global map.',
            button: {
                text: 'Find local events',
                url: 'http://gdg.events/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        }
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
