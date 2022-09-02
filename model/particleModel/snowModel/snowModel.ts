import { Draw } from "../../draw/draw.js";
import { Vec2 } from "../../geometry/geometry.js";
import { Particle } from "../../particle/particle.js";
import { ParticleModel } from "../particleModel.js";

export class SnowModel extends ParticleModel {

    render(particle: Particle, draw: Draw, worldScale: number): void {
        let p = new Vec2(
            particle.point.x * worldScale,
            particle.point.y * worldScale
        );
        draw.circle(p, 2, 255, 255, 255)
    }
}