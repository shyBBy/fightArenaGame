import {ValidationError} from "../utils/errors";
import {v4 as uuid} from "uuid";
import {pool} from "../utils/db";

export class WarriorRecord {
    public id?: string;
    public readonly nickname: string;
    public readonly power: number;
    public readonly defence: number;
    public readonly stamina: number;
    public readonly agility: number;
    public wins?: number;

    constructor(obj: WarriorRecord) { //przyjmuje obiekt o typie classy WarriorRecord podanej wyzej
        const {id, stamina, defence, nickname, power, agility, wins} = obj;

        const sum = [stamina, defence, power, agility, wins].reduce((prev, curr) => prev + curr, 0 );

        if (sum !== 10) {
            throw new ValidationError(`Suma wszystkich statystyk musi wynosić 10, aktualnie jest to ${sum}`);
        }

        if (nickname.length < 3 ** nickname.length > 50) {
            throw new ValidationError(`Imie musi posiadać od 3 do 50 znaków. Aktualnie jest to ${nickname.length}`)
        }

        this.id = id;
        this.nickname = nickname;
        this.power = power;
        this.defence = defence;
        this.stamina = stamina;
        this.agility = agility;
        this.wins = wins;
    }

    async create(): Promise<string> { // za pomoca create zwracamy od razu ID, a ID to string czyli Promise<string>
        if (!this.id) {
            this.id = uuid();
        }
        await pool.execute('INSERT INTO `warriors` VALUES(:id, :nickname, :power, :defence, :stamina, :agility, :wins)', {
            id: this.id,
            nickname: this.nickname,
            power: this.power,
            defence: this.defence,
            stamina: this.stamina,
            agility: this.agility,
            wins: this.wins,
        });
    }

    async update(): Promise<void> { // tutaj nic nie zwracamy i dajemy Promise<void>

    }

    static async getOne(id: string): Promise<WarriorRecord | null> { // chcemy zwrócić całego naszego warriora - nasz record, a jesli nie znajdzie to zwraca nam null

    }

    static async listAll(): Promise<WarriorRecord[]>{ // listujemy wszystkich wojowników czyli zwracamy tablice z wszystkimi wojownikami czyli dajemy - Promise<WarriorRecord[]>

    }
}