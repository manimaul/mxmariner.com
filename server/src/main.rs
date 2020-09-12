use actix_web::{web, App, HttpServer, HttpRequest, Error};
use actix_files as fs;
use std::path::{Path, PathBuf};
#[macro_use]
extern crate lazy_static;

async fn index(req: HttpRequest) -> Result<fs::NamedFile, Error> {
    let path: PathBuf = req.match_info().query("filename").parse().unwrap();
    let p = Path::new(&RES_PATH.as_str()).join(path);
    return if p.is_file() {
        let file = fs::NamedFile::open(p)?;
        Ok(file.use_last_modified(true))
    } else {
        let fbp = Path::new(&RES_PATH.as_str()).join("index.html");
        let file = fs::NamedFile::open(fbp)?;
        Ok(file.use_last_modified(true))
    }
}


lazy_static! {
    static ref RES_PATH: String = std::env::args().nth(1).expect("no path given");
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("{}", RES_PATH.as_str());
    HttpServer::new(|| App::new().route("/{filename:.*}", web::get().to(index)))
        .bind("0:8088")?
        .run()
        .await
}