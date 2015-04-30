angular.module('app.community.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('CommunityService', function () {
    // Might use a resource here that returns a JSON array

    var communities = [
        {
            "id": 6,
            "name": "abc",
            "handle": "10673/13",
            "type": "community",
            "link": "/RESTapi/communities/6",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "",
            "introductoryText": "",
            "shortDescription": "SL",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": [1, 2, 3]
},
        {
            "id": 5,
            "name": "ABC",
            "handle": "10673/12",
            "type": "community",
            "link": "/RESTapi/communities/5",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "",
            "introductoryText": "",
            "shortDescription": "CL",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 8,
            "name": "Agriculture",
            "handle": "10673/16",
            "type": "community",
            "link": "/RESTapi/communities/8",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "This community is under the creative commons licence",
            "introductoryText": "This community will help us find the different fields in agriculture and the further subdivisions of this subject.",
            "shortDescription": "AGRIC",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 21,
            "name": "bless",
            "handle": "10673/32",
            "type": "community",
            "link": "/RESTapi/communities/21",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "",
            "introductoryText": "",
            "shortDescription": "bless wiil be dealing in music",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 2,
            "name": "BLIS3 DAY",
            "handle": "10673/9",
            "type": "community",
            "link": "/RESTapi/communities/2",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "",
            "introductoryText": "",
            "shortDescription": "this community is about the profiles of blis3day students at makerere university",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 26,
            "name": "cataloguing",
            "handle": "10673/37",
            "type": "community",
            "link": "/RESTapi/communities/26",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "",
            "introductoryText": "",
            "shortDescription": "process of describing library materials",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 16,
            "name": "cataloguing",
            "handle": "10673/27",
            "type": "community",
            "link": "/RESTapi/communities/16",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "",
            "introductoryText": "",
            "shortDescription": "process of describing library materials",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 14,
            "name": "chemistry",
            "handle": "10673/25",
            "type": "community",
            "link": "/RESTapi/communities/14",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "find all these in MUK main library",
            "introductoryText": "study of chemicals",
            "shortDescription": "chem",
            "sidebarText": "more to be added later",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 19,
            "name": "DOMESTIC VIOLANCE",
            "handle": "10673/30",
            "type": "community",
            "link": "/RESTapi/communities/19",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "copy right reserved",
            "introductoryText": "Materials are available about domestic violance",
            "shortDescription": "DV",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 15,
            "name": "DOMESTIC VIOLANCE",
            "handle": "10673/26",
            "type": "community",
            "link": "/RESTapi/communities/15",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "copy right reserved",
            "introductoryText": "Materials are available about domestic violance",
            "shortDescription": "DV",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 24,
            "name": "education",
            "handle": "10673/35",
            "type": "community",
            "link": "/RESTapi/communities/24",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "all materials about education are reserved in library",
            "introductoryText": "education is the basic need an individual require",
            "shortDescription": "edu",
            "sidebarText": "there is needfor online education to easy the work of users",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 9,
            "name": "EDUCATION",
            "handle": "10673/17",
            "type": "community",
            "link": "/RESTapi/communities/9",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "The information about these reading materials can be found with all publishers and bookshops countrywide",
            "introductoryText": "This subject deals with all the print and non -print materials in the education sector.It covers subjects in biology,chemistry,history,co-curricular among others",
            "shortDescription": "educ",
            "sidebarText": "There will be book exhitions and book weeks twice in a year ie January and December respectively",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 17,
            "name": "EDUCATION IN UGANDA",
            "handle": "10673/28",
            "type": "community",
            "link": "/RESTapi/communities/17",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "",
            "introductoryText": "",
            "shortDescription": "This community is dealing with things conccerning tthe education sector of Uganda",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 12,
            "name": "Jawaharlal Univesity",
            "handle": "10673/21",
            "type": "community",
            "link": "/RESTapi/communities/12",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "",
            "introductoryText": "",
            "shortDescription": "JU",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 3,
            "name": "Kawaala Literacy Programe E-library",
            "handle": "10673/10",
            "type": "community",
            "link": "/RESTapi/communities/3",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "Due consideration will be given to the copyrighted materials.",
            "introductoryText": "This digital library will provide access to collections of all levels that will work for the community to improve on the literacy levels of Kawaala people.",
            "shortDescription": "Targeting the community at large both school going and non-school going",
            "sidebarText": "Join us every Saturday and Sunday for reading competitions",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 22,
            "name": "Legal libary for Nabweru Magistrates Court",
            "handle": "10673/33",
            "type": "community",
            "link": "/RESTapi/communities/22",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "",
            "introductoryText": "",
            "shortDescription": "law community for lagal collection",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 25,
            "name": "LIBRARY AND INFORMATION SCIENCE DAY 3",
            "handle": "10673/36",
            "type": "community",
            "link": "/RESTapi/communities/25",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "Being published on 22/April/2015",
            "introductoryText": "Classification is the arrangement of materials according to their classes like title, subject.",
            "shortDescription": "About document classification",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 20,
            "name": "LIS CLASS",
            "handle": "10673/31",
            "type": "community",
            "link": "/RESTapi/communities/20",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "all rights reserved",
            "introductoryText": "WELCOME TO THE WORLD OF LIS",
            "shortDescription": "LC",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 18,
            "name": "MINING SECTOR",
            "handle": "10673/29",
            "type": "community",
            "link": "/RESTapi/communities/18",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "copyright © 2014-2015",
            "introductoryText": "Types of mining\ \ mineral types\ \ processes used\ \ mining policies",
            "shortDescription": "MIN SEC",
            "sidebarText": "problems in mining sector in uganda",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 1,
            "name": "Sample Community",
            "handle": "10673/1",
            "type": "community",
            "link": "/RESTapi/communities/1",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "<p><em>If this Community had special copyright text to display, it would be displayed here.</em></p>",
            "introductoryText": "<p>This is the introductory text for the <em>Sample Community</em> on the DSpace Demonstration Site. It is editable by System or Community Administrators (of this Community).</p>\ \ <p><strong>DSpace Communities may contain one or more Sub-Communities or Collections (of Items).</strong></p>\ \ <p>This particular Community has its own logo (the <a href=\"http://www.duraspace.org/\">DuraSpace</a> logo).</p>",
            "shortDescription": "This is a sample top-level community",
            "sidebarText": "<p>This is the <em>news section</em> for this <em>Sample Community</em>. System or Community Administrators (of this Community) can edit this News field.</p>",
            "countItems": 5,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 11,
            "name": "S.K.Dey",
            "handle": "10673/19",
            "type": "community",
            "link": "/RESTapi/communities/11",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "",
            "introductoryText": "",
            "shortDescription": "S.K.D",
            "sidebarText": "",
            "countItems": 1,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 10,
            "name": "S.R.Dey",
            "handle": "10673/18",
            "type": "community",
            "link": "/RESTapi/communities/10",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "",
            "introductoryText": "",
            "shortDescription": "S.R.D",
            "sidebarText": "",
            "countItems": 1,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 7,
            "name": "TECHNOLOGY",
            "handle": "10673/15",
            "type": "community",
            "link": "/RESTapi/communities/7",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "Rights reserved to only the founders",
            "introductoryText": "This is a great necessity and generally applicable and should indicate the intent of the information system",
            "shortDescription": "TECH.",
            "sidebarText": "looks at the role of information as an information source",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 23,
            "name": "Untitled",
            "handle": "10673/34",
            "type": "community",
            "link": "/RESTapi/communities/23",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "",
            "introductoryText": "",
            "shortDescription": "",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
},
        {
            "id": 4,
            "name": "Untitled",
            "handle": "10673/11",
            "type": "community",
            "link": "/RESTapi/communities/4",
            "expand": [
"parentCommunity",
"collections",
"subCommunities",
"logo",
"all"
],
            "logo": null,
            "parentCommunity": null,
            "copyrightText": "",
            "introductoryText": "",
            "shortDescription": "",
            "sidebarText": "",
            "countItems": 0,
            "subcommunities": [],
            "collections": []
}
];
    return {
        all: function () {
            return communities;
        },
        get: function (communityId) {
            // Simple index lookup
            //return communities[communityId];
            for (var count = 0; count < communities.length; count++) {
                console.log(communities[count].id);
                if (communities[count].id == communityId) {
                    console.log('Match found');
                    console.log(communityId);
                    break;
                }
            }
            return communities[count];
        }
    };
})


.factory('CollectionService', function () {
        var collections = [
            {
                "id": 1,
                "name": "Collection of Sample Items",
                "handle": "10673/2",
                "type": "collection",
                "link": "/RESTapi/collections/1",
                "expand": [
"parentCommunityList",
"parentCommunity",
"items",
"license",
"logo",
"all"
],
                "logo": null,
                "parentCommunity": null,
                "parentCommunityList": [],
                "items": [1, 2, 3, 4, 5],
                "license": null,
                "copyrightText": "<p><em>If this collection had a specific copyright statement, it would be placed here.</em></p>",
                "introductoryText": "<p>This is a <em>DSpace Collection</em> which contains sample DSpace Items.</p>\ \ <p><strong>Collections in DSpace may only contain Items.</strong></p>\ \ <p>This particular Collection has its own logo (the <a href=\"http://www.opensource.org/\">Open Source Initiative</a> logo).</p>\ \ <p>This introductory text is editable by System Administrators, Community Administrators (of a parent Community) or Collection Administrators (of this Collection).</p>",
                "shortDescription": "This collection contains sample items.",
                "sidebarText": "<p>This is the <strong>news</strong> section for this Collection. System Administrators, Community Administrators (of a parent Community) or Collection Administrators (of this Collection) can edit this News field.</p>",
                "numberItems": 5
}, {
                "id": 2,
                "name": "Collection with embargo feature enabled (use only with XMLUI)",
                "handle": "10673/8",
                "type": "collection",
                "link": "/RESTapi/collections/2",
                "expand": [
"parentCommunityList",
"parentCommunity",
"items",
"license",
"logo",
"all"
],
                "logo": null,
                "parentCommunity": null,
                "parentCommunityList": [],
                "items": [],
                "license": null,
                "copyrightText": "",
                "introductoryText": "",
                "shortDescription": "",
                "sidebarText": "",
                "numberItems": 0
}, {
                "id": 3,
                "name": "Inspirational Material",
                "handle": "10673/80",
                "type": "collection",
                "link": "/RESTapi/collections/19",
                "expand": [
"parentCommunityList",
"parentCommunity",
"items",
"license",
"logo",
"all"
],
                "logo": null,
                "parentCommunity": null,
                "parentCommunityList": [],
                "items": [],
                "license": null,
                "copyrightText": "",
                "introductoryText": "Find here materials that will inspire you to be one you have always dreamt of.",
                "shortDescription": "Classic collection outside the academic arena",
                "sidebarText": "",
                "numberItems": 0
}, {
                "id": 4,
                "name": "Library Automation",
                "handle": "10673/50",
                "type": "collection",
                "link": "/RESTapi/collections/8",
                "expand": [
"parentCommunityList",
"parentCommunity",
"items",
"license",
"logo",
"all"
],
                "logo": null,
                "parentCommunity": null,
                "parentCommunityList": [],
                "items": [],
                "license": null,
                "copyrightText": "",
                "introductoryText": "",
                "shortDescription": "LU",
                "sidebarText": "",
                "numberItems": 1
}
    ];
        return {
            get: function (collectionIds) {
                var collectionArray = [];
                for (var count = 0; count < collectionIds.length; count++) {
                    collectionArray.push(collections[collectionIds[count] - 1]);
                }
                return collectionArray;

            },
            getById: function (collectionId) {
                for (var count = 0; count < collections.length; count++) {
                    if (collections[count].id == collectionId)
                        break;
                }
                return collections[count];
            }
        };
    })
    .factory('ItemService', function () {
        var items = [
            {
                "id": 1,
                "name": "Test Webpage",
                "handle": "10673/4",
                "type": "item",
                "link": "/RESTapi/items/1",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-26 02:00:16.851",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": [{
                    "name": "Webpage.txt",
                    "type": "plain/text"
                }, {
                    "name": "Webpage.doc",
                    "type": "word/doc"
                }, {
                    "name": "Webpage.pdf",
                    "type": "adobe/PDF"
                }, {
                    "name": "Webpage.html",
                    "type": "text/html"
                }],
                "archived": "true",
                "withdrawn": "false",
                "metadata": [{
                        "key": "dc.creator",
                        "value": "Doe, Jane L",
                        "language": "en_US"
},
                    {
                        "key": "dc.date.accessioned",
                        "value": "1650-06-26T19:58:25Z",
                        "language": null
},
                    {
                        "key": "dc.date.available",
                        "value": "1650-06-26T19:58:25Z",
                        "language": null
},
                    {
                        "key": "dc.date.issued",
                        "value": "1650-06-26",
                        "language": null
},
                    {
                        "key": "dc.identifier.issn",
                        "value": "123456789",
                        "language": "en_US"
},
                    {
                        "key": "dc.identifier.uri",
                        "value": "http://hdl.handle.net/10673/6",
                        "language": null
},
                    {
                        "key": "dc.description.abstract",
                        "value": "This is really just a sample abstract. If it was a real abstract it would contain useful information about this test document. Sorry though, nothing useful in this paragraph. You probably shouldn't have even bothered to read it!",
                        "language": "en_US"
},
                    {
                        "key": "dc.language",
                        "value": "en",
                        "language": "en_US"
},
                    {
                        "key": "dc.rights",
                        "value": "© Jane Doe",
                        "language": "en_US"
},
                    {
                        "key": "dc.subject",
                        "value": "keyword1",
                        "language": "en_US"
},
                    {
                        "key": "dc.subject",
                        "value": "keyword2",
                        "language": "en_US"
},
                    {
                        "key": "dc.subject",
                        "value": "keyword3",
                        "language": "en_US"
},
                    {
                        "key": "dc.title",
                        "value": "Test PowerPoint Document",
                        "language": "en_US"
},
                    {
                        "key": "dc.type",
                        "value": "text",
                        "language": "en_US"
}]
},
            {
                "id": 2,
                "name": "Test PowerPoint Document",
                "handle": "10673/6",
                "type": "item",
                "link": "/RESTapi/items/3",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-26 02:00:26.198",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 3,
                "name": "Test PDF Document",
                "handle": "10673/5",
                "type": "item",
                "link": "/RESTapi/items/4",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-26 02:00:29.817",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 4,
                "name": "Test Word Document",
                "handle": "10673/7",
                "type": "item",
                "link": "/RESTapi/items/5",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-26 02:00:31.689",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 5,
                "name": "Journal of Library and Information Science",
                "handle": "10673/62",
                "type": "item",
                "link": "/RESTapi/items/19",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 10:48:23.96",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 6,
                "name": "Library Automation",
                "handle": "10673/52",
                "type": "item",
                "link": "/RESTapi/items/17",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 09:14:48.677",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 7,
                "name": "library management system",
                "handle": "10673/45",
                "type": "item",
                "link": "/RESTapi/items/14",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 08:51:45.942",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 8,
                "name": "Journal of Library and Information Science",
                "handle": "10673/91",
                "type": "item",
                "link": "/RESTapi/items/28",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 11:08:45.666",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 9,
                "name": "Information Literacy in the Knowledge Society",
                "handle": "10673/87",
                "type": "item",
                "link": "/RESTapi/items/23",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 11:02:08.003",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 10,
                "name": "Test Excel Document",
                "handle": "10673/3",
                "type": "item",
                "link": "/RESTapi/items/2",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-26 00:02:18.911",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 11,
                "name": "Automation",
                "handle": "10673/46",
                "type": "item",
                "link": "/RESTapi/items/15",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 08:58:23.498",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 12,
                "name": "88iuuii",
                "handle": "10673/76",
                "type": "item",
                "link": "/RESTapi/items/22",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 10:57:39.68",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 13,
                "name": "Sis 2012",
                "handle": "10673/56",
                "type": "item",
                "link": "/RESTapi/items/18",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 10:36:59.097",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 14,
                "name": "INDEST 2014",
                "handle": "10673/66",
                "type": "item",
                "link": "/RESTapi/items/20",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 10:49:53.857",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 15,
                "name": "a",
                "handle": "10673/41",
                "type": "item",
                "link": "/RESTapi/items/13",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 08:36:08.828",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 16,
                "name": "Automation",
                "handle": "10673/23",
                "type": "item",
                "link": "/RESTapi/items/8",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 07:37:00.162",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 17,
                "name": "ABSTRACTS Roadmap to Usher in Knowledge Society",
                "handle": "10673/95",
                "type": "item",
                "link": "/RESTapi/items/26",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 11:12:42.911",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 18,
                "name": "International conference on \"What's next in libraries? 2K15\"",
                "handle": "10673/90",
                "type": "item",
                "link": "/RESTapi/items/27",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 11:07:27.644",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 19,
                "name": "yy",
                "handle": "10673/96",
                "type": "item",
                "link": "/RESTapi/items/30",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 11:13:16.96",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 20,
                "name": "Reflection",
                "handle": "10673/73",
                "type": "item",
                "link": "/RESTapi/items/21",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 10:54:51.242",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
},
            {
                "id": 21,
                "name": "INDEST 2014",
                "handle": "10673/83",
                "type": "item",
                "link": "/RESTapi/items/24",
                "expand": [
"metadata",
"parentCollection",
"parentCollectionList",
"parentCommunityList",
"bitstreams",
"all"
],
                "lastModified": "2015-04-27 11:01:20.056",
                "parentCollection": null,
                "parentCollectionList": null,
                "parentCommunityList": null,
                "bitstreams": null,
                "archived": "true",
                "withdrawn": "false"
}
        ];


        return {
            get: function (itemIds) {
                var itemArray = [];
                for (var count = 0; count < itemIds.length; count++) {
                    itemArray.push(items[itemIds[count] - 1]);
                }
                return itemArray;

            },
            getById: function (itemId) {
                for (var count = 0; count < items.length; count++) {
                    if (items[count].id == itemId)
                        break;
                }
                return items[count];
            }
        };

    });