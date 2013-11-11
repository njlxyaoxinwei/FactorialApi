function remove0(prod)
{
  l = prod.length - 1;
  while (prod[l]==0) {
	prod.pop();
	l--;
//	console.log('l='+l+'prod='+prod)
  };
  return prod;
}
function zeros(prod)
{
	var i = 0;
	while (prod[i]==0) {
		i++;
	}
	return i;
}
function addzeros(count, s)
{
	for (var i=0;i<count;i++) {
		s += '0'
	};
	return s;
}
function factorial(num)
{
	var max = 13232;
	var number =  Number(num);//
	if (number > max || number < 0 || !(number%1===0)) {return "Are you kidding me?"}
	else {
		var prod = [1], count = 0;
		while (number > 0) {
		//	console.log('prod='+prod+'number='+number);
			var i=0, c=0, r=0, t=0, l=prod.length - 1;
		//	console.log('l='+l+'prod[l]=0? '+prod[l]);
			prod = remove0(prod);
			l = prod.length; 
			while (c>0 || i<l) {
				t = prod[i]*number + c;
				r =t % 10;
				c = (t - r) / 10;
				prod[i] = r;
				i++;
				if (i>=prod.length) {prod.push(0)};
		//		console.log(prod);
		//		console.log('r='+r+'i='+i+'c='+c+'t='+t+'l='+l)
			};
		//	console.log('prod='+prod);
			number--;
			var z = zeros(prod);
			count += z;
			prod.splice(0, z);


		}
		return addzeros(count, remove0(prod).reverse().join(''));
	}



	// var number = Number(num);
	// if (number>1)
	// 	{return number*factorial (number-1)}
	// else 
	// {
	// 	return 1

	// }
}
exports.factorial = function(number) {
	return factorial(number)
}