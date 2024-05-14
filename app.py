from flask import Flask,request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', title='Home')


@app.route('/Popular Recipe')
def popular_recipe():
    return render_template('Popular Recipe.html')

@app.route('/Submit Recipe')
def submit_recipe():
    return render_template('Submit Recipe.html')



@app.route('/Tips&Tricks')
def Tips_Tricks():
    return render_template('Tips&Tricks.html')

@app.route('/Comment Page')
def Comment_Page():
    return render_template('Comment Page.html')

@app.route('/Search Result')
def search_results():
    query = request.args.get('query', '')
    # Logic to fetch and display search results based on the query
    return render_template('Search Result.html', query=query)



if __name__ == '__main__':

    app.run(debug=True)
