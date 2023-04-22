const { app, router } = require("./src/app");

app.use("/api/auth", router.authRouter);
app.use("/api/buyer", router.buyerRouter);
app.use("/api/seller", router.sellerRouter);

app.listen(8000, () => {
    console.log("Server Started on server 8000");
})