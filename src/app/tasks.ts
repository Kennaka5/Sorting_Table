export class Tasks 
{
    id: string;
    priority: string;
    description: string;
    status: number;
    createdAt: string;

    constructor(id, priority, description, status, createdAt) {
        this.id = id;
        this.priority = priority;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
    }
}