
it('should calculate the monthly rate correctly', function () {
  // ...

expect(calculateMonthlyPayment({amount:10000 , years:10 , rate:6 })).toEqual("111.02")
expect(calculateMonthlyPayment({amount:15000 , years:7 , rate:20 })).toEqual("333.09")
expect(calculateMonthlyPayment({amount:15000 , years:7 , rate:18 })).toEqual("315.27")
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({amount:15000 , years:7 , rate:18 }).charAt(calculateMonthlyPayment({amount:15000 , years:7 , rate:18 }).length-3)).toEqual(".")
  expect(calculateMonthlyPayment({amount:15555 , years:8 , rate:8 }).charAt(calculateMonthlyPayment({amount:15555 , years:8 , rate:8 }).length-3)).toEqual(".")
  expect(calculateMonthlyPayment({amount:27550 , years:16 , rate:3 }).charAt(calculateMonthlyPayment({amount:27550 , years:16 , rate:3 }).length-3)).toEqual(".")
  expect(calculateMonthlyPayment({amount:200 , years:2 , rate:5 }).charAt(calculateMonthlyPayment({amount:200 , years:2 , rate:5 }).length-3)).toEqual(".")
});

/// etc  
