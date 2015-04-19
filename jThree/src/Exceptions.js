var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="../_references.ts"/>
var jThree;
(function (jThree) {
    var Exceptions;
    (function (Exceptions) {
        var jThreeObject = jThree.Base.jThreeObject;
        var jThreeException = (function (_super) {
            __extends(jThreeException, _super);
            function jThreeException(name, message) {
                _super.call(this);
                this.name = name;
                this.message = message;
            }
            jThreeException.prototype.toString = function () {
                return "Exception:{0}\nName:{1}\nMessage:{2}".format(_super.prototype.toString.call(this), this.name, this.message);
            };
            return jThreeException;
        })(jThreeObject);
        Exceptions.jThreeException = jThreeException;
        var IrregularElementAccessException = (function (_super) {
            __extends(IrregularElementAccessException, _super);
            function IrregularElementAccessException(accessIndex) {
                _super.call(this, "Irregular vector element was accessed.", "You attempted to access {0} element. But,this vector have enough dimension.".format(accessIndex));
            }
            return IrregularElementAccessException;
        })(jThreeException);
        Exceptions.IrregularElementAccessException = IrregularElementAccessException;
        var InvalidArgumentException = (function (_super) {
            __extends(InvalidArgumentException, _super);
            function InvalidArgumentException(message) {
                _super.call(this, "Invalid argument was passed.", message);
            }
            return InvalidArgumentException;
        })(jThreeException);
        Exceptions.InvalidArgumentException = InvalidArgumentException;
        var SingularMatrixException = (function (_super) {
            __extends(SingularMatrixException, _super);
            function SingularMatrixException(m) {
                _super.call(this, "Passed matrix is singular matrix", "passed matrix:{0}".format(m.toString()));
            }
            return SingularMatrixException;
        })(jThreeException);
        Exceptions.SingularMatrixException = SingularMatrixException;
        var AbstractClassMethodCalledException = (function (_super) {
            __extends(AbstractClassMethodCalledException, _super);
            function AbstractClassMethodCalledException() {
                _super.call(this, "Invalid method was called.", "This method is abstract method, cant call by this instance");
            }
            return AbstractClassMethodCalledException;
        })(jThreeException);
        Exceptions.AbstractClassMethodCalledException = AbstractClassMethodCalledException;
        var WebGLErrorException = (function (_super) {
            __extends(WebGLErrorException, _super);
            function WebGLErrorException(text) {
                _super.call(this, "WebGL reported error.", text);
            }
            return WebGLErrorException;
        })(jThreeException);
        Exceptions.WebGLErrorException = WebGLErrorException;
    })(Exceptions = jThree.Exceptions || (jThree.Exceptions = {}));
})(jThree || (jThree = {}));
//# sourceMappingURL=Exceptions.js.map