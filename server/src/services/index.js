const { RequiredError } = require('openai/dist/base');

module.exports.authService = require('./auth.service');
module.exports.emailService = require('./email.service');
module.exports.tokenService = require('./token.service');
module.exports.userService = require('./user.service');
module.exports.imageGeneratorService = require("./imageGenerator.service");
module.exports.chatService=require("./chat.service");
module.exports.codeGenService=require('./codeGenerator.service')
module.exports.sqlGeneratorService=require("./sql.service");
module.exports.grammarCheckService=require("./check.service");
module.exports.restaurantReviewGenService=require("./restaurantReview.service");
module.exports.interviewQuesGenService=require("./interviewQues.service");
module.exports.adProductService=require("./adProduct.service");
module.exports.friendService=require("./friend.service")
module.exports.productScanService=require("./scanProduct.service")
module.exports.productSuggestionService=require("./healthProductSuggestion.service")
module.exports.ingredientSummaryService=require("./ingredientSummary.service")
module.exports.mealService=require("./meal.service")
module.exports.exerciseService=require("./exercise.service")
module.exports.quotesService=require("./quotes.service")
module.exports.createUserHistoryService=require("./userHistory.service")
module.exports.generateAdService=require("./adsForPlatform.service")
