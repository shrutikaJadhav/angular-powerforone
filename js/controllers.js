var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('home',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.title = $scope.menutitle;
        TemplateService.content = 'views/home.html';
        TemplateService.header = 'views/header.html';
        $scope.navigation = NavigationService.getnav();
    }
);
phonecatControllers.controller('works',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("How it works");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = 'views/works.html';
        TemplateService.header = 'views/header.html';
        $scope.navigation = NavigationService.getnav();
    }
);
phonecatControllers.controller('proarmy',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Join the pro army");
        TemplateService.title = $scope.menutitle;
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Join The PFO Army";
        TemplateService.content = 'views/proarmy.html';
        $scope.navigation = NavigationService.getnav();
    }
);
phonecatControllers.controller('aboutUs',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        //        $scope.menutitle = NavigationService.makeactive("Join the pro army");
        TemplateService.title = $scope.menutitle;
        TemplateService.header = 'views/headertext.html';
        $scope.title = "About Us";
        TemplateService.content = 'views/aboutus.html';
        $scope.navigation = NavigationService.getnav();

    }
);
phonecatControllers.controller('Explore',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        //        $scope.menutitle = NavigationService.makeactive("Join the pro army");
        //        TemplateService.title = $scope.menutitle;
        TemplateService.content = 'views/Explore.html';
        $scope.menutitle = NavigationService.makeactive("Explore projects");
        TemplateService.header = 'views/headerblack.html';
        $scope.navigation = NavigationService.getnav();
        //    $scope.display="About Us";
    }
);
phonecatControllers.controller('campaign',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        //        $scope.menutitle = NavigationService.makeactive("Join the pro army");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = 'views/campaign.html';
        TemplateService.header = 'views/HeaderCampaign.html';
        $scope.navigation = NavigationService.getnav();
        //    $scope.display="About Us";
    }
);
phonecatControllers.controller('myprofile',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        //        $scope.menutitle = NavigationService.makeactive("Join the pro army");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = 'views/myprofile.html';
        TemplateService.header = 'views/headerblack.html';
        $scope.navigation = NavigationService.getnav();
        //    $scope.display="About Us";
    }
);

phonecatControllers.controller('rewards',
    function($scope, $location, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        //        $scope.menutitle = NavigationService.makeactive("Join the pro army");
        TemplateService.header = 'views/headerblack.html';
        TemplateService.title = $scope.menutitle;
        TemplateService.content = 'views/rewards.html';
        $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('TermsAndCondition',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        //        $scope.menutitle = NavigationService.makeactive("Join the pro army");
        TemplateService.title = $scope.menutitle;
        TemplateService.header = 'views/headertext.html';
        $scope.title = "Terms And Condition";
        TemplateService.content = 'views/terms.html';
        $scope.navigation = NavigationService.getnav();

    }
);

phonecatControllers.controller('headerctrl',
    function($scope, TemplateService) {
        $scope.template = TemplateService;
    }
);