use axum::{Router, routing::get};
use rand::Rng;

async fn hello() -> String {
    let mut rng = rand::rng();

    let value = rng.random::<u8>();
    format!("{value}")
}

#[tokio::main]
async fn main() {
    let router = Router::new().route("/", get(hello));

    let listener = tokio::net::TcpListener::bind("0.0.0.0:2189").await.unwrap();
    axum::serve(listener, router).await.unwrap();
}
