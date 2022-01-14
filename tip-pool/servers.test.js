describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });


  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

 it('should clear input field', function () {
    submitServerInfo();

    
    expect(serverNameInput.value).toEqual('')
  });

  it('should create server1 on server table', function () {
    submitServerInfo();

    
    expect(document.querySelector('#server1')).toBeTruthy();
  });






  afterEach(function() {
    // teardown logic
   
    document.querySelector('#server1').remove()
    serverId=0;
    delete allServers.server1;
  });
});
