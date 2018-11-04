$(function() {

	// for square count

	$("#squareMeasure").on('input', function() {
		var squareRange = $(this).val();
		var arrNumb = squareRange.split('.');
		$("#squareVal").val(arrNumb[0] + ',' + arrNumb[1] + ' м^2 грн');
	})

	$("#frstIns").on('input', function() {
		var instRange = $(this).val();
		var arrNumb = instRange.split('');
		var zeroCount = 0;
		var str;
		if (arrNumb.length < 6) {
			str = arrNumb[0] + arrNumb[1] + ' ' + arrNumb[2] + arrNumb[3] + arrNumb[4] + ' грн';  
		} else {
			str = arrNumb[0] + arrNumb[1] + arrNumb[2] + ' ' + arrNumb[3] + arrNumb[4] + arrNumb[5] + ' грн';  
		}

		$("#instVal").val(str);
	})

});
