exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/r-reflections';
exports.TEST_DATABASE_URL = "mongodb://cap3t:pikapika1@ds143132.mlab.com:43132/capstone-3-test" ||'mongodb://localhost/test-reflections';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '86400' 