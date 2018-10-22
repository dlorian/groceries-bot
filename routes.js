
const init = (app, groceryService, groceryBot) => {

    app.get('/groceries', async (req, res) => {
        let text = req.body.text;

        try {
            await groceryService.add({
                name: "Test Grocery 1",
                amount: 2
            });
    
            await groceryService.add({
                name: "Test Grocery 2",
                amount: 2
            });
    
            const allGrcoeries = await groceryService.findAll();
            console.log(allGrcoeries);
    
            groceryBot.handle('foo');
    
            groceryBot.handle('list bla');
        } catch(err) {
            console.log(err);
        }
        res.send("Hello world");
    });
}

module.exports = { init };