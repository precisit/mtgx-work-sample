'use strict';

var controllersModule = require('./_index');

function ContentCtrl($stateParams, ViaplayService, TrailerService, $sce) {

  var vm = this;
  vm.category = $stateParams.category;

  ViaplayService.get({category: $stateParams.category, title: $stateParams.title}, function(data) {
		vm.items = null;
		vm.product = null;

		if(data.pageType === 'category') { 
			vm.items = data._embedded['viaplay:blocks'][0]._embedded['viaplay:products'];
		}
		else if(data.pageType === 'product') {
			vm.product = data._embedded['viaplay:blocks'][0]._embedded['viaplay:product'];
            vm.product.trailerFrame = $sce.trustAsHtml('<img src="'+vm.product.content.images.landscape.url+'">');

			var imdbId = vm.product.content.imdb.id.substr(2);

			TrailerService.get({imdbId: imdbId}, function(data) {
				if(data.trailers.trailer) {
					vm.product.trailerFrameClick = $sce.trustAsHtml(data.trailers.trailer[0].embed[0]);
				} 
			});			
		}
  });
}

controllersModule.controller('ContentCtrl', ContentCtrl);