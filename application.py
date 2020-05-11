from flask import Flask, jsonify, request, send_from_directory
from newsapi import NewsApiClient
import json
import re
from collections import Counter


# print a nice greeting.
def say_hello(username = "World"):
    return '<p>Hello %s!</p>\n' % username
# EB looks for an 'application' callable by default.
application = Flask(__name__, static_url_path='/static')

# add a rule for the index page.

@application.route('/')
def root():
    return application.send_static_file('index.html')


@application.route('/top-stopwords')
def getTopStopWords():
    print("Request to top stopwords")
    top_stopwords = newsapi.get_top_headlines(page_size = 30)
    artArr = []
    allart = top_stopwords["articles"];
    for art in allart:
    	head = art["title"]
    	newhead = re.sub(r'[^\w\s]','',head)
    	artArr += newhead.split()
    # ctr = Counter(artArr)
    f = open("stopwords_en.txt","r")
    allstp = f.readlines()
    allstopword = []
    for word in allstp:
    	allstopword.append(word.strip())
    newarr = []
    for w in artArr:
        if (w.lower() not in allstopword) and (w not in allstopword):
            newarr.append(w)

    ctr = Counter(newarr)
    # for k in allstopword:
    # 	if k in ctr.keys():
    # 		del ctr[k]

    # 	elif k.capitalize() in ctr.keys():
    # 		del ctr[k.capitalize()]
    ctr30 = ctr.most_common(30)
    return json.dumps(ctr30)


@application.route('/top-headlines')
def getTopHeadlines():
	top_headlines = newsapi.get_top_headlines(page_size = 30)
	return json.dumps(top_headlines)


@application.route('/top-cnn-news')
def getTopCnnNews():
	top_cnn_news = newsapi.get_top_headlines(sources='cnn', language='en',page_size= 30)
	return json.dumps(top_cnn_news)

@application.route('/top-fox-news')
def getTopFoxNews():
	top_fox_news = newsapi.get_top_headlines(sources='fox-news',language='en',page_size = 30)
	return json.dumps(top_fox_news)

@application.route('/search')
def searchHeadlines():
    keyword = request.args.get('keyword')
    startdate = request.args.get('startdate',None)
    enddate= request.args.get('enddate')
    source = request.args.get('source',None)
    print(1)
    try:
        if source == 'all':
        
            search_results = newsapi.get_everything(q=keyword, from_param = startdate, to = enddate, page_size = 30, sort_by='publishedAt', language='en')
        else:
            search_results = newsapi.get_everything(q=keyword, sources=source, from_param = startdate, to = enddate, page_size = 30, sort_by='publishedAt', language='en')
    except Exception as e:
        print(e)
        print(e.exception["status"])
        return json.dumps(e.exception)
   
    # print("Search: ")
    # print(search_results.json())
    # if (search_results['status'] == "error"):
    #     print("old date error")
    return json.dumps(search_results)

@application.route('/sources')
def searchSources():
    category = request.args.get('category')
    if category == 'all':
        source_results = newsapi.get_sources()
    else:
        search_results = newsapi.get_sources(category = category, country = 'us',language= 'en')
    return json.dumps(search_results)

APIKEY = "6d4a542c24be47b8a924525a7f6d317b"
newsapi = NewsApiClient(api_key=APIKEY)

# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    application.debug = True
    application.run()






##### API KEY : 4400122bb2a14b1386358011250ec01e ############
##### 6d4a542c24be47b8a924525a7f6d317b


