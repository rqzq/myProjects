import tornado.ioloop
import tornado.web


class Mainhandler(tornado.web.RequestHandler):
    def get(self):
      self.write("Hello World \n")
      print(self.request)

     def make_app():
       return tornado.web.Application([
         (r"/",Mainhandler),
       ])

if __name__=="__main__":
  app = make_app()
  app.listen(8888)
  tornado.ioloop.IOLoop.current().start()