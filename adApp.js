var adApp = angular.module('adApp', ['ngMessages']);

adApp.service('AdService', function($log) {
     
    /**
    * List of Folders and Ads created as mock data
    * Typically, this data comes from a data base
    */

    var folderList = [
        {id: '001', name: 'Winter'},
        {id: '002', name: 'Spring'},
        {id: '003', name: 'Summer'},
        {id: '004', name: 'Fall'},
        {id: '005', name: 'July 4th '},
        {id: '006', name: 'Big Sale'},
        {id: '007', name: 'Promo'},
        {id: '008', name: 'Seasonal'},
        {id: '009', name: 'Xmas'}
    ];
    
    var adsList = {
        '001' : [
            {id: 1, name: 'winter 1', 
             url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRS1dDUqcwgGnz37L9ocCebYYV0-E_6_iRcxzP1VAfvQC3sJ97YVw'},
            {id: 2, name: 'winter 2', 
             url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUdIeRd1Al9evoNXC1StH2VF9mp_84CAJLFr0v1TL-bv8BVoqTXQ'},
            {id: 3, name: 'winter 3', 
             url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMODd43FVIvlmwpIDasKsD1xscITimKeR780_2Gn875vPrWsLOpw'},
            {id: 4, name: 'winter 4', 
             url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCTD0P8D4CXlsreB5g9uCbfDiFPFxznZDwtKkOGABewAVGvY7bA'} ],
        '002' : [
            {id: 1, name: 'spring 1', 
             url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvpPs-eQEfHzAlRhfarUaIzixJzbOCNMLBVyiFrwRQWUh6ivcUQ'},
            {id: 2, name: 'spring 2', 
             url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRts6AZFUf8YmhJCOBJFr3nP11sKPheMm2QwzHBeCuLiyXQ17G_VQ'},
            {id: 3, name: 'spring 3', 
             url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6XrKk-ww8WNkLZQ_KxtcrkguNd74FSDGbkRQDu96XCAys0BgpuQ'},
            {id: 4, name: 'spring 4', 
             url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfFhPBjRyVj2WDZEtMk5r7vBnilJTiHVnDivQ--SryycyEzL05Lw'},
            {id: 2, name: 'spring 5', 
             url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRts6AZFUf8YmhJCOBJFr3nP11sKPheMm2QwzHBeCuLiyXQ17G_VQ'},
            {id: 3, name: 'spring 6', 
             url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6XrKk-ww8WNkLZQ_KxtcrkguNd74FSDGbkRQDu96XCAys0BgpuQ'},
            {id: 4, name: 'spring 7', 
             url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfFhPBjRyVj2WDZEtMk5r7vBnilJTiHVnDivQ--SryycyEzL05Lw'}],
        '003' : [
            {id: 1, name: 'summer 1', 
             url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCeg8iGy6QZebeEjlhpIs76lneKummmpcOLJ79Vnm8_r7lZV3wA'}],
        '004' : [
            {id: 1, name: 'fall 1', 
             url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJv1d1WqP9e9DPmzSaq6ynuFtkUjR5tEXo_OBcwUDLZW33ctP5nA'},
            {id: 2, name: 'fall 2', 
             url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRbmTDUAnJVKmhY3RET_tS_0MwRpxNmjbC8E5g1hl30jPzTSCwl'},
            {id: 3, name: 'fall 3', 
             url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfFhPBjRyVj2WDZEtMk5r7vBnilJTiHVnDivQ--SryycyEzL05Lw'},
            {id: 3, name: 'fall 4', 
             url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfFhPBjRyVj2WDZEtMk5r7vBnilJTiHVnDivQ--SryycyEzL05Lw'},
            {id: 3, name: 'fall 5', 
             url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfFhPBjRyVj2WDZEtMk5r7vBnilJTiHVnDivQ--SryycyEzL05Lw'}
        ]
    };
    
    
    /**
    * service objects for Ads and Folders
    */
    
    this.ad = {
        create: function() {
        /**
        * Create An Ad by whatever mean needed
        * Typically, this data would be stored in a data base
        */
        $log.debug('create an ad');
        },
        read: function(id) {
        /**
        * Read An Ad in this case by reading the predefined arrays
        * @param id - Ad ID
        */
        $log.debug('read ad(s)');
            if(id) {
                return adsList[id];
            }else{
                return adsList;
            }
        },
        update: function() {
            /**
        * Edit An Ad by whatever mean needed
        * Typically, this data would be stored in a data base
        */
        $log.debug('Edit an ad');
        },
        delete: function() {
        /**
        * Delete An Ad by whatever mean needed
        * Typically, this data would be stored in a data base
        */
        $log.debug('Delete an ad');
        }
    };
    
    this.folder = {
        create: function() {
        /**
        * Add A folder by whatever mean needed
        * Typically, this data would be stored in a data base
        */
        $log.debug('Delete an ad');
        },
        read: function(id) {
        /**
        * Read A folder in this case by reading the predefined arrays
        * @param id - Folder ID
        */
        $log.debug('read folder(s)');
            if(id) {
                return folderList[id];
            }else{
                return folderList;
            }
        },
        update: function() {
        /**
        * Edit A folder by whatever mean needed
        * Typically, this data would be stored in a data base
        */
        $log.debug('Delete an ad');
        },
        delete: function() {
        /**
        * Delete A folder by whatever mean needed
        * Typically, this data would be stored in a data base
        */
        $log.debug('Delete an ad');
        }
    };
    
}).controller('adController', function ($scope, $log, $timeout, $filter, $http, $q, AdService) {
    
    // set the default view to be folders
    $scope.showFolders = true;
    
    // Load ALL forders from the service
    $scope.folderList = AdService.folder.read();
    $scope.adList = [];
    
    var ads = AdService.ad.read();
    
    $scope.showAdsForFolder = function (listId) {
        // Let the view trigger the load of a given folder list
        $scope.adList = ads[listId];
        $scope.folderList.forEach(function(f) {
            if(f.id == listId) {
                $scope.folderName = f.name;
            }
        });
        
        $scope.showFolders = false;
    };
});
 