 5303  gulp
 5304  git add -A
 5305  git commit -m'exported queries from index.js'
 5306  git push origin adam
 5307  gulp
 5308  git add -A
 5309  git commit 'distance between station and report function work in progress'
 5310  git push origin adam
 5311  git reset
 5312  git add -A
 5313  git commit 'distance between station and report function work in progress'
 5314  git push origin adam
 5315  git add -A
 5316  git commit -m 'detirmine distance between station and report in progress'
 5317  git push origin adam
 5318  gulp
 5319  git checkout distance Refactor
 5320  git checkout distance_Refactor
 5321  get branch distnce_Refactor
 5322  gulp
 5323  git add -A
 5324  git reset
 5325  git branch distanceRefactor
 5326  get checkout distanceRefactor
 5327  get branch -b distanceRefactor
 5328  git branch -b distanceRefactor
 5329  git checkout distanceRefactor
 5330  gulp
 5331  psql
 5332  gulp
 5333  git add -A
 5334  git commit -m 'work in progress'
 5335  git push origin distanceRefactor
 5336  gulp
 5337  git add -A
 5338  git commit -m 'single-station functional, populates within 5 mile radius'
 5339  git push origin distanceRefactor
 5340  git checkout master
 5341  git pull origin master
 5342  git checkout distanceRefactor
 5343  git merge master
 5344  gulp
 5345  git add -A
 5346  git commit -m 'merges resolved + single-station functional, populates within 5 mile radius'
 5347  git push origin distanceRefactor
 5348  gulp
 5349  git add -A
 5350  git commit -m'fixing add new report'
 5351  git push origin distanceRefactor
 5352  git pull origin master
 5353  gulp
 5354  knex migrate:rollback
 5355  knex migrate:latest
 5356  gulp
 5357  knex seed:run
 5358  gulp
 5359  git add -A
 5360  git commit -m'changed reports radius to be 0 miles'
 5361  git push origin distanceRefactor
 5362  git pull origin master
 5363  gulp
 5364  git add -A
 5365  git commit -m'fixed site pin'
 5366  git push origin distanceRefactor
 5367  gulp
 5368  git add -A
 5369  git commit -m 'station 14 working'
 5370  git push origin distanceRefactor
 5371  git pull origin master
 5372  gulp
 5373  git add -A
 5374  git commit -m 'single route working....for right now'
 5375  git push origin distanceRefactor
 5376  gulp
 5377  git add -A
 5378  git commit -m 'single route working....again unnested promise'
 5379  git push origin distanceRefactor
 5380  gulp
 5381  git checkout populate pins
 5382  git branch populate pins
 5383  git checkout branch pins
 5384  git checkout addPins
 5385  git checkout -b stationPins
 5386  git add -A
 5387  git commit -m 'station pins now populate'
 5388  git push origin stationPins
 5389  knex seed:run
 5390  psql
 5391  npm i faker
 5392  knex seed:run
 5393  psql
 5394  gulp
 5395  knex seed:run
 5396  gulp
 5397  knex migrate:rollback
 5398  psql
 5399  knex migrate:latest
 5400  knex seed:run
 5401  knex migrate:rollback
 5402  knex migrate:latest
 5403  knex seed:run
 5404  psql
 5405  knex migrate:rollback
 5406  knex migrate:latest
 5407  knex seed:run
 5408  psql
 5409  knex migrate:rollback
 5410  knex migrate:latest
 5411  knex seed:run
 5412  psql
 5413  gulp
 5414  git checkout adam
 5415  git branch adam
 5416  git checkout adam
 5417  git add -A
 5418  git commit -m 'pushing up for the night'
 5419  git push origin stationPins
 5420  gulp
 5421  git add -A
 5422  git checkout adam
 5423  git pull origin master
 5424  gulp
 5425  knex migrate:rollback
 5426  knex migrate:latest
 5427  knex seed:run
 5428  psql
 5429  knex migrate:rollback
 5430  knex migrate:latest
 5431  knex seed:run
 5432  psql
 5433  knex migrate:rollback
 5434  knex migrate:latest
 5435  knex seed:run
 5436  gulp
 5437  git branch
 5438  git checkout stationPins
 5439  git add -A
 5440  git commit -m 'fixed single station page and changed radius to 50 miles'
 5441  git push origin adam
 5442  git pull origin adam
 5443  gulp
 5444  psql
 5445  gulp
 5446  git add -A
 5447  git commit -m "stations from river no populating"
 5448  git push origin adam
 5449  git pull origin adam
 5450  git push origin adam
 5451  git pull origin adam
 5452  git checkout master
 5453  git pull origin masrter
 5454  git pull origin master
 5455  gulp
 5456  ~/galvanize
 5457  l
 5458  cd unit-1
 5459  l
 5460  cd q1_project
 5461  atom .
 5462  http-server -p 3000 -c-1 src
 5463  git add -A
 5464  git commit -m 'working up to flight path'
 5465  git push origin refactor.v1
 5466  http-server -p 3000 -c-1 src
 5467  git add -A
 5468  git push origin refactor.v1
 5469  git commit -m 'in process of utilizing inital object/array from AJAX calls to accomplish entire scope of project'
 5470  git push origin refactor.v1
 5471  gulp
 5472  http-server -p 3000 -c-1 src
 5473  git add -A
 5474  git commit -m 'in process of utilizing inital object/array from AJAX calls to accomplish entire scope of project'
 5475  git push origin refactor.v1
 5476  http-server -p 3000 -c-1 src
 5477  git add -A
 5478  git commit -m 'making progress, need to finish determining the detDistance function'
 5479  git push origin refactor.v1
 5480  ~/galvanize
 5481  cd unit-1
 5482  l
 5483  cd q1_project
 5484  atom .
 5485  http-server -p 3000 -c-1 src
 5486  ..
 5487  cd unit-3
 5488  git clone https://github.com/apfranzen/donut-tycoon-30.git
 5489  cd donut-tycoon-30
 5490  yo galvanize-express
 5491  npm i
 5492  knex init
 5493  npm i knex
 5494  knex init
 5495  atom .
 5496  gulp
 5497  knex migrate:make shops
 5498  knex migrate:make shops_donuts
 5499  createdb donut_tycoon
 5500  knex migrate:make donuts
 5501  knex migrate:make employees
 5502  ..
 5503  cd unit-1
 5504  ..
 5505  cd unit1
 5506  cd unit-2
 5507  l
 5508  cd Fishing_App
 5509  atom .
 5510  knex seed:make shops
 5511  knex seed:make donuts
 5512  knex seed: make shops_donuts
 5513  knex seed:make shops_donuts
 5514  knex seed:make employees
 5515  npm i faker -save
 5516  knex migrate:latest
 5517  knex seed:run
 5518  knex migrate:latest
 5519  knex migrate:roolback
 5520  knex migrate:rollback
 5521  knex migrate:latest
 5522  knex seed:run
 5523  knex migrate:rollback
 5524  knex migrate:latest
 5525  knex seed:run
 5526  knex dropdb donuts_tycoon
 5527  psql
 5528  dropdb donut_tycoon
 5529  createdb donut_tycoon
 5530  knex migrate:latest
 5531  knex seed:run
 5532  psql
 5533  git add -A
 5534  git commit -m 'db migrations and seeds complete'
 5535  got push origin master
 5536  git push origin master
 5537  ..
 5538  l
 5539  cd week4
 5540  l
 5541  ..
 5542  cd week3
 5543  l
 5544  ..
 5545  cd week4
 5546  l
 5547  ..
 5548  cd week5
 5549  l
 5550  ..
 5551  cd galvanize-restaurants
 5552  atom .
 5553  git add -A
 5554  git commit -m'/shops and /:id/show routes working'
 5555  git push origin master
 5556  psql
 5557  dropdb donut_tycoon
 5558  create db donut_tycoon
 5559  createdb donut_tycoon
 5560  knex migrate:latest
 5561  knex seed:run
 5562  gulp
 5563  psql
 5564  gulp
 5565  git add -A
 5566  git commit -m 'most of employees routes working'
 5567  git push origin master
 5568  gulp
 5569  psql
 5570  gulp
 5571  dropdb donuts_tycoon
 5572  dropdb donut_tycoon
 5573  create donut_tycoon
 5574  createdb donut_tycoon
 5575  knex migrate:latest
 5576  knex seed:run
 5577  psql
 5578  gulp
 5579  git add -A
 5580  git commit -m 'shop delete route working'
 5581  git push origin master
 5582  gulp
 5583  git branch -b Promise.all
 5584  git checkout promise.all
 5585  git branch promise.all
 5586  git checkout promise.all
 5587  git add -A
 5588  git commit -m 'Promise.all for get :/id show in progress'
 5589  git push origin promise.all
 5590  git checkout master
 5591  gulp
 5592  git add -A
 5593  git commit -m 'pull request to submit'
 5594  git push origin master
 5595  git add -A
 5596  git commit -m 'pull request to submit'
 5597  git push origin master
 5598  ..
 5599  mkdir week1
 5600  cd week1
 5601  mkdir hello-angular
 5602  cd hello-angular
 5603  touch index.html
 5604  atom index.html
 5605  open index.html
 5606  ..
 5607  mkdir exercises
 5608  cd exercises
 5609  touch very_exciting_form.html
 5610  aotm very_exciting_form.html
 5611  atom very_exciting_form.html
 5612  open very_exciting_form.html
 5613  git clone https://github.com/apfranzen/angular-camera-view.git
 5614  atom .
 5615  cd angular-camera-view
 5616  open index.html
 5617  ..
 5618  mkdir todo-app-angular
 5619  cd todo-app-angular
 5620  touch index.html
 5621  atom .
 5622  open index.html
 5623  ..
 5624  l
 5625  ..
 5626  l
 5627  cd exercises
 5628  l
 5629  cd angular-camera-view
 5630  git add -A
 5631  git commit -m 'part 1 complete'
 5632  git push origin master
 5633  git branch part2
 5634  git checkout part2
 5635  atom .
 5636  open index.html
 5637  ..
 5638  l
 5639  mkdir family_angular_multiple_controllers_example
 5640  cd family_angular_multiple_controllers_example
 5641  atom .
 5642  touch index.html
 5643  touch app.js controllers.js
 5644  open index.html
 5645  git init
 5646  git branch rootScope
 5647  git branch checkout rootScope
 5648  git branch rootScope
 5649  git checkout rootScape
 5650  git branch rootScope
 5651  ..
 5652  git clone https://github.com/apfranzen/angular-cash-register.git
 5653  atom .
 5654  cd angular-cash-register
 5655  atom .
 5656  open index.html
 5657  ..
 5658  l
 5659  cd family_angular_multiple_controllers_example
 5660  open index.html
 5661  ..
 5662  mkdir angular_form_validation
 5663  cd angular_form_validation
 5664  touch index.html app.js
 5665  touch controllers.js
 5666  atom .
 5667  open index.html
 5668  ..
 5669  l
 5670  cd todo-app-angular
 5671  atom .
 5672  ..
 5673  cd angular-camera-view
 5674  atom .
 5675  ..
 5676  l
 5677  cd angular_form_validation
 5678  atom .
 5679  open index.html
 5680  ..
 5681  cd unit-2
 5682  l
 5683  cd Fishing_App
 5684  atom .
 5685  ..
 5686  cd unit-3
 5687  l
 5688  cd week1
 5689  l
 5690  cd exercises
 5691  l
 5692  cd family_angular_multiple_controllers_example
 5693  atom .
 5694  git init
 5695  git add -A
 5696  git commit -m 'form submission complete, only need to reset form'
 5697  git push origin master
 5698  ..
 5699  l
 5700  cd angular_form_validation
 5701  git init
 5702  git add -A
 5703  git commit -m 'form submission complete, only need to reset form'
 5704  git push origin master
 5705  git remote -v
 5706  git remote -V
 5707  git remote -v
 5708  git remote set-url origin https://github.com/apfranzen/angular_form_validation.git
 5709  https://github.com/apfranzen/angular_form_validation.git
 5710  git remove set-url https://github.com/apfranzen/angular_form_validation.git
 5711  git remote set-url https://github.com/apfranzen/angular_form_validation.git
 5712  git remove set-url -add https://github.com/apfranzen/angular_form_validation.git
 5713  git remote set-url -add https://github.com/apfranzen/angular_form_validation.git
 5714  y
 5715  git remote set-url --add https://github.com/apfranzen/angular_form_validation.git
 5716  git remote add origin https://github.com/apfranzen/angular_form_validation.git
 5717  git remote -v
 5718  git add -A
 5719  git commit -m 'form validation complete barring form reset'
 5720  git push origin master
 5721  git pull origin master
 5722  git push origin master
 5723  git add -A
 5724  git reset
 5725  git add -A
 5726  git commit -m 'form validation complete barring form reset'
 5727  git push origin master
 5728  git pull master
 5729  git pull orign master
 5730  git pull origin master
 5731  git branch 2
 5732  git checkout 2
 5733  git add -A
 5734  git commit -m 'form validation complete barring form reset'
 5735  git commit origin 2
 5736  git branch test
 5737  git checkout test
 5738  git add -A
 5739  git commit -m 'test'
 5740  git push origin test
 5741  git merge master
 5742  git checout master
 5743  git checkout master
 5744  git status
 5745  atom .
 5746  git add -A
 5747  git commit -m ''
 5748  git push origin master
 5749  git remote rm
 5750  git remote rm destination
 5751  git remote rm angular_form_validation
 5752  git remote rm Angulr Form Validation
 5753  git remote rm Angular Form Validation
 5754  git remote -v
 5755  git remote rm angular_form_validation
 5756  git remote -v
 5757  git remote rm https://github.com/apfranzen/angular_form_validation.git
 5758  git remote rm angular_form_validation
 5759  git remote rm Angular Form Validation
 5760  git remote add origin https://github.com/apfranzen/angular_form_validation.git
 5761  git status
 5762  git add -A
 5763  git commit -m ''
 5764  git push origin master
 5765  git branch
 5766  atom .
 5767  touch readme.md
 5768  git add -A
 5769  git commit -m 'added ReadMe'
 5770  git push origin master
 5771  ..
 5772  cd angular-camera-view
 5773  open index.html
 5774  git add -A
 5775  git push git commit -m 'items are populating in card'
 5776  git commit -m 'items are populating in card'
 5777  git push origin part2
 5778  git add -A
 5779  git commit -m 'items are populating in card'
 5780  git push origin part2
 5781  ..
 5782  l
 5783  mkdir class_creator
 5784  cd class_creator
 5785  touch index.html
 5786  touch app.js
 5787  touch controllers.js
 5788  touch main.css
 5789  atom .
 5790  open index.html
 5791  ..
 5792  l
 5793  cd todo-app-angular
 5794  atom .
 5795  open index.html
 5796  git init
 5797  git add -A
 5798  git commit -m 'initial push'
 5799  git push origin master
 5800  git remote add origin https://github.com/apfranzen/angular_class_creator.git
 5801  git remote status -v
 5802  git remote -v
 5803  git push origin master
 5804  git branch scope
 5805  git checkout scope
 5806  ..
 5807  l
 5808  cd angular-camera-view
 5809  open index.html
 5810  ..
 5811  cd week1
 5812  git clone https://github.com/Isaacjcollier/jasmine-frame.git
 5813  cd jasmine-frame
 5814  atom .
 5815  npm install -g jasmine
 5816  cd src
 5817  cd 01_addition
 5818  jasmine init
 5819  touch testing_addition.spec.js
 5820  atom .
 5821  jasmine testing_addition.spec.js
 5822  jasmine testing_subtraction.spec.js
 5823  ..
 5824  mkdir 02_subtraction
 5825  l
 5826  atom .
 5827  cd 02_subtraction
 5828  jasmine init
 5829  jasmine testing_subtraction.spec.js
 5830  ..
 5831  cd 03_multiplication
 5832  jasmine init
 5833  jasmine testing_multiplication.spec.js
 5834  ..
 5835  cd 06
 5836  cd 06_fizzBuzz
 5837  jasmine init
 5838  touch fibbbuz.hs
 5839  touch testing_fizzbuzz.spec.js
 5840  jasmine testing_fizzbuzz.spec.js
 5841  ..
 5842  cd exercises
 5843  l
 5844  mkdir reddit_clone
 5845  cd reddit_clone
 5846  l
 5847  touch index.html
 5848  touh app.js
 5849  toch app.js
 5850  touch app.js controllers.js main.css
 5851  atom .
 5852  \topen index.html
 5853  npm i generator-galvanize-html -g
 5854  git status
 5855  git init
 5856  git add -A
 5857  git remote add origin https://github.com/apfranzen/reddit_clone.git
 5858  git status -v
 5859  git reset
 5860  git add -A
 5861  git commit -m 'inital commit'
 5862  git push origin master
 5863  ~/galvanize
 5864  cd unit-3
 5865  cd week1
 5866  cd exercises
 5867  l
 5868  cd reddit_clone
 5869  open index.html
 5870  ..
 5871  mkdir week2
 5872  cd week
 5873  cd week2
 5874  mkdir intro_dependency_injection
 5875  cd intro_dependency_injection
 5876  atom .
 5877  ..
 5878  cd week1
 5879  l
 5880  cd exercises
 5881  l
 5882  cd todo-app-angular
 5883  atom .
 5884  git init
 5885  git reset
 5886  git remote add origin https://github.com/apfranzen/todo_app_angular.git
 5887  git add -A
 5888  git commit -m 'initial commit'
 5889  git push origin master
 5890  git branch dependency_injection_ex
 5891  git checkout dependency_injection_ex
 5892  git checkout master
 5893  git checkout dependency_injection_ex
 5894  npm install -g json-server
 5895  touch db.json && \\necho "{\"persons\": [], \"todos\": []}" >> db.json && \\njson-server --watch db.json
 5896  http GET http://localhost:3000/persons
 5897  json-server --watch db.json
 5898  http GET http://localhost:3000/persons
 5899  http POST http://localhost:3000/persons name: Adam
 5900  http POST http://localhost:3000/persons name=Adam
 5901  http POST http://localhost:3000/persons name=Brandon
 5902  http POST http://localhost:3000/persons/2/todos todo="make sandwhich"
 5903  open index.html
 5904  git add -A
 5905  git commit -m 'httpie commands working, scope issues with HTML'
 5906  git push origin dependency_injection_ex
 5907  ..
 5908  cd week2
 5909  l
 5910  cd exercises
 5911  mkdir exercise
 5912  cd exercise
 5913  mkdir angular-routing-example
 5914  cd angular-routing-example
 5915  yo galvanize-html
 5916  npm install -g yo
 5917  ..
 5918  mkdir angular-routing-ex
 5919  yo galvanize htl
 5920  yo galvanize html
 5921  yo galvanize -html
 5922  yo galvanize-html
 5923  npm i
 5924  atom .
 5925  gulp
 5926  json-server --watch db.json
 5927  open index.html
 5928  json-server --watch db.json
 5929  git add -A
 5930  git commit -m 'JSON Server now rendering todos for specific person'
 5931  git push origin dependency_injection_ex
 5932  ..
 5933  l
 5934  ..
 5935  l
 5936  cd donut-tycoon-30
 5937  atom .
 5938  git status
 5939  ..
 5940  .
 5941  ...
 5942  cd week1
 5943  cd unit-3
 5944  cd week1
 5945  cd exercises
 5946  l
 5947  cd reddit_clone
 5948  atom .
 5949  open inde
 5950  open index.html
 5951  npm i moment
 5952  npm install angular-moment moment
 5953  npm i pickaday
 5954  npm i pikaday
 5955  npm install angular-moment moment
 5956  git add -A
 5957  git reset
 5958  git branch
 5959  git add -A
 5960  git commit -m 'comment functionality working'
 5961  git push origin master
 5962  ..
 5963  cd week2
 5964  l
 5965  cd exercise
 5966  mkdir angular-kittens
 5967  cd angular-kittens
 5968  yo galvanize-html
 5969  atom .
 5970  gulp
 5971  npm i
 5972  gulp
 5973  git init
 5974  git remote add origin https://github.com/apfranzen/angular-kittens.git
 5975  git add -A
 5976  git commit -m 'initial commit'
 5977  git push origin master
 5978  gulp
 5979  git add -A
 5980  git commit -m 'images rendering correctly'
 5981  git push origin master
 5982  ..
 5983  cd unit-1
 5984  l
 5985  cd q1_project
 5986  l
 5987  http-server -p 3000 -c-1 src
 5988  atom .
 5989  http-server -p 3000 -c-1 src
 5990  ..
 5991  node promise-practice.js
 5992  \tpsql
 5993  node promise-practice.js
 5994  take test
 5995  ~/galvanize
 5996  l
 5997  mkdir personal-site
 5998  touch index.html
 5999  touch main.css
 6000  touch main.js
 6001  atom .
 6002  cd personal-site
 6003  atom .
 6004  open index.html
 6005  ..
 6006  cd unit-3
 6007  l
 6008  cd week2
 6009  l
 6010  cd exercise
 6011  l
 6012  cd angular-kittens
 6013  atom .
 6014  gulp
 6015  ..
 6016  l
 6017  ..
 6018  cd week1
 6019  l
 6020  cd exercises
 6021  l
 6022  cd redd
 6023  cd reddit_clone
 6024  l
 6025  atom .
 6026  ..
 6027  cd week1
 6028  ..
 6029  cd week2
 6030  l
 6031  cd exercise
 6032  l
 6033  take angular-cutom-directives
 6034  yo galvanize-html
 6035  npm i
 6036  atom .
 6037  gulp
 6038  history
 6039  ..
 6040  take angular-services
 6041  yo galvanize-html
 6042  npm i
 6043  atom .
 6044  gulp
 6045  ..
 6046  l
 6047  ..
 6048  make custom-directives-part-2
 6049  history
 6050  take custom-directives-part-2
 6051  atom .
 6052  touch app.js index.html
 6053  open index.html
 6054  git init
 6055  git remote add origin https://github.com/apfranzen/angular-custom-directives-2.git
 6056  git reset
 6057  git add -A
 6058  git commit -m 'initial commit'
 6059  git push origin master
 6060  open dice.html
 6061  git branch dice
 6062  git checkout dice
 6063  git add -A
 6064  git commit -m 'completed dice'
 6065  git push origin dice
 6066  ll
 6067  ..
 6068  l
 6069  cd exercise
 6070  l
 6071  cd angular-services
 6072  gulp
 6073  git init
 6074  git remote add https://github.com/apfranzen/angular-services.git
 6075  git remote add origin https://github.com/apfranzen/angular-services.git
 6076  git status -V
 6077  git status -v
 6078  git add -A
 6079  git commit -m 'initial commit'
 6080  git push origin master
 6081  git pull origin master
 6082  git push origin master
 6083  git merge master
 6084  git status -V
 6085  git remove remote
 6086  git remote remove
 6087  git branch test
 6088  git checkout test
 6089  git pull origin test
 6090  git pull origin master
 6091  git remote rm destination
 6092  git remote rm master
 6093  git remote rm angular-services
 6094  git checkout test
 6095  git checkout master
 6096  git remote rm https://github.com/apfranzen/angular-services
 6097  git remote -v
 6098  git remote rm origin
 6099  git remote add origin https://github.com/apfranzen/angular-services.git
 6100  git add -A
 6101  git commit -m 'initial commit'
 6102  git push origin master
 6103  ..
 6104  cd unit-1
 6105  cd q1_project
 6106  atom .
 6107  open index.html
 6108  cd src
 6109  open index.html
 6110  ..
 6111  l
 6112  node promise-practice
 6113  atom promise-practice.js
 6114  ..
 6115  ~/galvanize
 6116  cd unit-1
 6117  cd q1_project
 6118  http-server -p 3000 -c-1 src
 6119  ..
 6120  cd unit-3
 6121  l
 6122  take card-draw
 6123  yo galvanize-html
 6124  gulp
 6125  npm i
 6126  gulp
 6127  git remote add origin https://github.com/apfranzen/card-draw-angular.git
 6128  git init
 6129  git remote add origin https://github.com/apfranzen/card-draw-angular.git
 6130  git add -A
 6131  fit reset
 6132  git reset
 6133  atom .
 6134  git add -A
 6135  git commit -m 'inital commit'
 6136  git push origin master
 6137  git branch 1
 6138  git checkout 1
 6139  gulp
 6140  http https://deckofcardsapi.com/api/deck/new/shuffle/\?deck_count\=1\n
 6141  https://deckofcardsapi.com/api/deck/new/shuffle/\?deck_count\=1\n
 6142  http https://deckofcardsapi.com/api/deck/new/shuffle/\?deck_count\=1\n
 6143  https://deckofcardsapi.com/api/deck/8lvctske4cm3\>/draw/\?count\=2\n
 6144  get https://deckofcardsapi.com/api/deck/8lvctske4cm3\>/draw/\?count\=2\n
 6145  http https://deckofcardsapi.com/api/deck/new/\n
 6146  http https://deckofcardsapi.com/api/deck/new/shuffle/\?deck_count\=1\n
 6147  gulp
 6148  git add -A
 6149  git commit -m 'Promise.all now get's current location'
 6150  git commit -m 'Promise.all now get\'s current location'
 6151  git commit -m 'Promise.all now gets current location'
 6152  git push origin refactor.v1
 6153  http https://deckofcardsapi.com/api/deck/new/shuffle/\?deck_count\=1\n
 6154  http-server -p 3000 -c-1 src
 6155  ..
 6156  cd unit-3
 6157  l
 6158  take shopping-cart-app
 6159  yo galvanize-html
 6160  npm i
 6161  atom .
 6162  gulp
 6163  ..
 6164  cd unit-1
 6165  cd q1_project
 6166  atom .
 6167  ..
 6168  cd q1_project
 6169  atom .
 6170  ..
 6171  cd unit-2
 6172  l
 6173  cd Fishing_App
 6174  atom .
 6175  ..
 6176  cd unit-3
 6177  l
 6178  cd shopping-cart-app
 6179  finder .
 6180  ..
 6181  ~/galvanize/unit-3/week2
 6182  l
 6183  cd exercise
 6184  l
 6185  ..
 6186  l
 6187  cd construction_activity_plan
 6188  atom .
 6189  gulp
 6190  ..
 6191  cd exercise
 6192  l
 6193  ..
 6194  l
 6195  ..
 6196  l
 6197  cd card-draw
 6198  atom .
 6199  gulp
 6200  ..
 6201  l
 6202  cd week2
 6203  l
 6204  cd exercise
 6205  l
 6206  atom angular-cutom-directives
 6207  atom angular-services
 6208  atom angular-kittens
 6209  ..
 6210  l
 6211  ..
 6212  l
 6213  cd card-draw
 6214  atom .
 6215  ..
 6216  l
 6217  .
 6218  ..
 6219  cd uni-3
 6220  cd unit-3
 6221  l
 6222  cd week2
 6223  l
 6224  cd intro_dependency_injection
 6225  atom .
 6226  l
 6227  ..
 6228  l
 6229  cd exercise
 6230  l
 6231  cd custom-directives-part-2
 6232  ..
 6233  l
 6234  cd week2
 6235  l
 6236  cd exercise
 6237  l
 6238  cd angular-services
 6239  atom .
 6240  ~/galvaniz3
 6241  ~/galvanize
 6242  cd unit-3
 6243  cd week2
 6244  l
 6245  ..
 6246  l
 6247  cd construction_activity_plan
 6248  gulp
 6249  ..
 6250  cd unit-1
 6251  ..
 6252  cd unit-2
 6253  l
 6254  cd Fishing_App
 6255  gulp .
 6256  gulp
 6257  psql
 6258  ..
 6259  cd unit-3
 6260  l
 6261  mkdir week3
 6262  cd week3
 6263  mkdir exercises
 6264  git clone https://github.com/mjhea0/node-token-auth --branch v1 --single-branch -b master neap-server
 6265  cd neap-server
 6266  git remove -v
 6267  git remote rm
 6268  git remote remove
 6269  git remote rm
 6270  git remote add origin https://github.com/apfranzen/neap-server.git
 6271  git remote remove origin
 6272  git remote set-url origin https://github.com/apfranzen/neap-server.git
 6273  git remote add origin https://github.com/apfranzen/neap-server.git
 6274  git status -v
 6275  atom .
 6276  npm i
 6277  git add -A
 6278  git commit -m 'inital commit'
 6279  git push origin master
 6280  gulp
 6281  npm test
 6282  npm run test
 6283  gulp
 6284  knex migrate:make coffee
 6285  createdb neap_server
 6286  createdb neap_server_test
 6287  knex migrate:latest
 6288  knex seed:make
 6289  knex seed:make init
 6290  ..
 6291  cd unit-2
 6292  l
 6293  cd week5
 6294  l
 6295  ..
 6296  cd Fishing_App
 6297  atom .
 6298  knex seed:run
 6299  npm install faker
 6300  knex seed:run
 6301  knex migrate:latest
 6302  knex migrate:rollback
 6303  knex migrate:latest
 6304  knex migrate:rollback
 6305  knex migrate:latest
 6306  knex seed:run
 6307  psql
 6308  gulp
 6309  npm test
 6310  heroku init
 6311  heroku create
 6312  git remote -v
 6313  git push heroku master
 6314  node -v
 6315  git status
 6316  git add .
 6317  git commit -m 'switched node version for heroku'
 6318  git push heroku master
 6319  heroku run knex migrate:latest --env production
 6320  heroku addons:create heroku-postgresql:hobby:dev
 6321  heroku addons:create heroku-postgresql:hobby-dev
 6322  heroku run knex migrate:latest --env production
 6323  heroku run knex migrate:latest --env product
 6324  heroku run knex migrate:latest --env production
 6325  heroku pg:psql --app enigmatic-gorge-65304 DATABASE
 6326  git status
 6327  git add .
 6328  git commit -m 'updated config for knex'
 6329  git push origin master
 6330  git push heroku master
 6331  heroku run knex migrate:latest --env production
 6332  heroku knex select * from coffees;
 6333  heroku pg
 6334  heroku run pg
 6335  herouku pg:psql
 6336  heroku pg:psql
 6337  heroku run knex seed:run
 6338  npm i faker --save
 6339  git add -A
 6340  git commit -m 'added faker as dependency'
 6341  git push origin master
 6342  heroku run knex seed:run
 6343  git push heroku master
 6344  heroku run knex seed:run
 6345  heroku pg:psql
adamfranzen:neap-server/ (master) $                                                                                                                               [11:25:18]
