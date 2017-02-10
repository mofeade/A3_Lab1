
(function () {
	$('img').on('click', function() {
		$.getJSON('includes/ajaxQuery.php', { model : this.id}, function(data) {
			console.log(data);

			$('.modelName').text(data.modelName);
			$('.hidden').removeClass('hidden');
			$('.subhead').text('SELECT YOUR MODEL : MINI COOPER ' + data.model);
			$('.modelDetails').text(data.modelDetails);
			$('.priceInfo').text(data.pricing);


		});
	});
})();