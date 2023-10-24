use winit::dpi::LogicalSize;
use winit::event::{Event, WindowEvent};
use winit::event_loop::EventLoop;
use winit::window::WindowBuilder;

mod constants;

pub fn run() {
    let event_loop = EventLoop::new().expect("Cannot create event loop");
    WindowBuilder::new()
        .with_title(constants::APP_TITLE)
        .with_min_inner_size(LogicalSize::new(800.0, 600.0))
        .build(&event_loop)
        .expect("Cannot create window");

    event_loop
        .run(move |event, elwt| {
            if let Event::WindowEvent {
                event,
                window_id: _,
            } = event
            {
                match event {
                    WindowEvent::CloseRequested => elwt.exit(),
                    WindowEvent::ActivationTokenDone {
                        serial: _,
                        token: _,
                    } => (),
                    _ => (),
                }
            }
        })
        .unwrap();
}
