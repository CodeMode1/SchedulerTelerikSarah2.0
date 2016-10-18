"use strict";
var core_1 = require('@angular/core');
var error_1 = require('./error');
var ErrorService = (function () {
    function ErrorService() {
        this.errorOccurred = new core_1.EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new error_1.Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    };
    return ErrorService;
}());
exports.ErrorService = ErrorService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0Msc0JBQXNCLFNBQVMsQ0FBQyxDQUFBO0FBRWhDO0lBQUE7UUFDSSxrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBUyxDQUFDO0lBTTlDLENBQUM7SUFKRyxrQ0FBVyxHQUFYLFVBQVksS0FBVTtRQUNsQixJQUFNLFNBQVMsR0FBRyxJQUFJLGFBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxvQkFBWSxlQU94QixDQUFBIiwiZmlsZSI6ImVycm9ycy9lcnJvci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVycm9yIH0gZnJvbSAnLi9lcnJvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgRXJyb3JTZXJ2aWNle1xyXG4gICAgZXJyb3JPY2N1cnJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3I+KCk7XHJcblxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSl7XHJcbiAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gbmV3IEVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmVycm9yT2NjdXJyZWQuZW1pdChlcnJvckRhdGEpO1xyXG4gICAgfVxyXG59Il19
