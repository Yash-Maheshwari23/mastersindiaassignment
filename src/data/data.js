export const snippet=[
    {
        id: 1,
        title:"server/api/admin.js/router.post",
        origin:'https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/8-begin/server/api/admin.js#L27',
        code:`router.post('/books/add', async (req, res) => {
 try {
  const book = await Book.add(Object.assign({ userId: req.user.id }, req.body));
  res.json(book);
 } catch (err) {
  logger.error(err);
  res.json({ error: err.message || err.toString() });
 }
});`
    },
    {
        id: 2,
        title:"server/api/admin.js/router.use",
        origin:'https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/admin.js#L7',
        code:`router.use((req, res, next) => {
 if (!req.user || !req.user.isAdmin) {
  res.status(401).json({ error: 'Unauthorized' });
  return;
 }
           
 next();
});`
    },
    {
        id: 3,
        title:"server/api/public.js/router.get",
        origin:'https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/6-begin/server/api/public.js#L7',
        code:`router.get('/books', async (req, res) => {
 try {
  const books = await Book.list();
  res.json(books);
 } catch (err) {
  res.json({ error: err.message || err.toString() });
 }
});`
    },
    {
        id: 4,
        title:"server/api/admin.js/router.get",
        origin:'https://github.com/builderbook/builderbook/tree/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/8-begin/server/api/admin.js#L46',
        code:`router.get('/books/detail/:slug', async (req, res) => {
 try {
  const book = await Book.getBySlug({ slug: req.params.slug });
  res.json(book);
 } catch (err) {
  res.json({ error: err.message || err.toString() });
 }
});`
    },
    {
        id: 5,
        title:"server/routes/client.js/router.post",
        origin:'https://github.com/Flood-UI/flood/blob/bb553506a86225811a965563af99bf8e39cc433f/server/routes/client.js#L86',
        code:`router.post('/torrents/delete', (req, res) => {
 const {deleteData, hash: hashes} = req.body;
 const callback = ajaxUtil.getResponseFn(res);
 
 req.services.clientGatewayService
  .removeTorrents({hashes, deleteData})
  .then(callback)
  .catch(err => {
   callback(null, err);
  });
});`
    },
    {
        id: 6,
        title:"core/DevServer.js/app.use",
        origin:'https://github.com/cube-js/cube.js/blob/8d9eb688ba55d8821bebaf2a23fbb3addf93ab84/packages/cubejs-server-core/core/DevServer.js#L253',
        code:`app.use(serveStatic(path.join(__dirname, '../playground'), {
 lastModified: false,
 etag: false,
 setHeaders: (res, url) => {
  if (url.indexOf('/index.html') !== -1) {
   res.setHeader('Cache-Control', 'no-cache');
  }
 }
}));`
    },
    {
        id: 7,
        title:"app/routes/index.js/router.get",
        origin:'https://github.com/OmarElGabry/chat.io/tree/082952e527a2f47f46341e0a6636f29d140c2abf/app/routes/index.js#L78',
        code:`// Rooms
 router.get('/rooms', [User.isAuthenticated, function(req, res, next) {
   Room.find(function(err, rooms){
     if(err) throw err;
     res.render('rooms', { rooms });
   });
}]);`
    },
    {
        id: 8,
        title:"metrics/server.js/Promise.fromNode.then",
        origin:'https://github.com/lando/lando/tree/c53a5e5f17a04764ddb2d5a68a104591f094c2f1/metrics/server.js#L92',
        code:`// Main logix
 Promise.fromNode(cb => {
  api.listen(config.LANDO_METRICS_PORT, cb);
 })
 .then(() => {
  log.info('Listening on port: %s', config.LANDO_METRICS_PORT);
});`
    },
    {
        id: 9,
        title:"server/api/admin.js/router.get",
        origin:'https://github.com/builderbook/builderbook/tree/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/6-begin/server/api/admin.js#L44',
        code:`router.get('/books/detail/:slug', async (req, res) => {
 try {
  const book = await Book.getBySlug({ slug: req.params.slug });
  res.json(book);
 } catch (err) {
  res.json({ error: err.message || err.toString() });
 }
});`
    },
    {
        id: 10,
        title:"src/app-custom.js/app.get",
        origin:'https://github.com/lando/lando/tree/c53a5e5f17a04764ddb2d5a68a104591f094c2f1/examples/node12/src/app-custom.js#L24',
        code:`// Basic HTTP response
 app.get('/', (req, res) => {
  res.header('Content-type', 'text/html');
  return res.end('<h1>DANCING DANCING STARLIGHT</h1>');
});`,
    }
]