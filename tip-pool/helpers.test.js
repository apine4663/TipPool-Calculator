describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 60;
      tipAmtInput.value = 6;
      submitPaymentInfo();
    });
  
  
   it('should add all tip amounts in tipAmt using sumPaymentTotal', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(6);
      billAmtInput.value = 10;
      tipAmtInput.value = 2;
      submitPaymentInfo();
      expect(sumPaymentTotal('tipAmt')).toEqual(8);

    });
  
    it('should converts the bill and tip amount into a tip percent', function () {
        expect(calculateTipPercent(60,6)).toEqual(10);
        billAmtInput.value = 10;
        tipAmtInput.value = 2;
        submitPaymentInfo();
        expect(calculateTipPercent(10,2)).toEqual(20);


      });
    
  it('should generate new td from value and append ', function () {
    let newTr = document.createElement('tr');

    appendTd(newTr, 'test');

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');

    
  });
  
  it('should generate delete td and append', function () {
    let newTr = document.createElement('tr');

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  });
    
    afterEach(function() {
      // teardown logic
     
    //   document.querySelector('#payment1').remove()
    //   document.querySelector('#payment2').remove()
      allPayments = {};
      paymentId=0;
    //   delete allPayments.payment1;
    //   delete allPayments.payment2;
      billAmtInput.value = '';
      tipAmtInput.value = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      paymentTbody.innerHTML = '';
    });
  });