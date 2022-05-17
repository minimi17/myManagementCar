using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ManagementCarsAPI.Data.migration
{
    public partial class createdatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Car",
                columns: table => new
                {
                    number = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    model = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    color = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    specialLetters = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    year = table.Column<int>(type: "int", nullable: false),
                    rentalCost = table.Column<int>(type: "int", nullable: false),
                    generalCost = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Car", x => x.number);
                });

            migrationBuilder.CreateTable(
                name: "CarAndDigitalTools",
                columns: table => new
                {
                    numberCar = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    idDigitalTools = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarAndDigitalTools", x => new { x.numberCar, x.idDigitalTools });
                });

            migrationBuilder.CreateTable(
                name: "Client",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(9)", maxLength: 9, nullable: false),
                    firstName = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    lastName = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    bornDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    phoneNumber = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    VIP = table.Column<bool>(type: "bit", nullable: false),
                    carNumber = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Client", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Department",
                columns: table => new
                {
                    name = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    description = table.Column<string>(type: "ntext", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Department", x => x.name);
                });

            migrationBuilder.CreateTable(
                name: "DigitalTools",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    price = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DigitalTools", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Worker",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    firstName = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    lastName = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    role = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    salary = table.Column<int>(type: "int", nullable: false),
                    joinIn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    password = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Worker", x => x.id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Client_carNumber",
                table: "Client",
                column: "carNumber",
                unique: true,
                filter: "[carNumber] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Car");

            migrationBuilder.DropTable(
                name: "CarAndDigitalTools");

            migrationBuilder.DropTable(
                name: "Client");

            migrationBuilder.DropTable(
                name: "Department");

            migrationBuilder.DropTable(
                name: "DigitalTools");

            migrationBuilder.DropTable(
                name: "Worker");
        }
    }
}
