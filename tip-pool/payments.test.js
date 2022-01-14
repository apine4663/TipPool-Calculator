describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 10;
      tipAmtInput.value = 1;
    });
  
    it('should add new payment to allPayments', function () {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('10');
      expect(allPayments['payment1'].tipAmt).toEqual('1');
      expect(allPayments['payment1'].tipPercent).toEqual(10);
    });
  
    it('should not add a new payment on submitPaymentInfo() with empty input', function () {
      billAmtInput.value = '';
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
  
    it('should create a new payment on createCurPayment()', function () {
      let expectedPayment = {
        billAmt: '10',
        tipAmt: '1',
        tipPercent: 10,
      }
  
      expect(createCurPayment()).toEqual(expectedPayment);
    });

    it('should update #paymentTable after appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
    
        appendPaymentTable(curPayment);
    
        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('$10');
        expect(curTdList[1].innerText).toEqual('$1');
        expect(curTdList[2].innerText).toEqual('10%');
        
      });
  
    it('should not create payment with empty input on createCurPayment()', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      let curPayment = createCurPayment();
  
      expect(curPayment).toEqual(undefined);
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
    });
  });