const app = express();
constclientPath = `${__dirname}/../client`;
app.use(express.statis(clientPath));
const server = http.createServer(app);
server.listen(5500, () => {
    console.log('server is running on "+port"');
});