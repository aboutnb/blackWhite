module.exports = (option,app)=>{
    return async function anther(ctx,next){
        ctx.state.csrf = ctx.csrf;
        await next();
    }
}